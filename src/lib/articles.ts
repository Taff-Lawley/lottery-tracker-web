import Database from 'better-sqlite3';
import path from 'path';

export interface Article {
  id: number;
  lottery_code: string;
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  draw_date: string;
  published_at: string;
}

const FIELDS = 'id, lottery_code, title, slug, meta_description, content, draw_date, published_at';

// ---------------------------------------------------------------------------
// SQLite (local dev — no DB_HOST set)
// ---------------------------------------------------------------------------

function sqliteOpen() {
  const dbPath = process.env.LOCAL_DB_PATH
    ?? path.resolve(process.cwd(), '../../lottery-seo/local_test.db');
  return new Database(dbPath, { readonly: true });
}

function sqliteAll(lotteryCode: string): Article[] {
  const db = sqliteOpen();
  const rows = db.prepare(
    `SELECT ${FIELDS} FROM articles WHERE lottery_code = ? ORDER BY draw_date DESC`
  ).all(lotteryCode) as Article[];
  db.close();
  return rows;
}

function sqliteBySlug(slug: string, lotteryCode: string): Article | undefined {
  const db = sqliteOpen();
  const row = db.prepare(
    `SELECT ${FIELDS} FROM articles WHERE lottery_code = ? AND slug = ?`
  ).get(lotteryCode, slug) as Article | undefined;
  db.close();
  return row;
}

// ---------------------------------------------------------------------------
// MariaDB (prod — DB_HOST present in environment)
// ---------------------------------------------------------------------------

async function mariaAll(lotteryCode: string): Promise<Article[]> {
  const mysql = await import('mysql2/promise');
  const pool = mysql.createPool({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await pool.query(
    `SELECT ${FIELDS} FROM articles WHERE lottery_code = ? ORDER BY draw_date DESC`,
    [lotteryCode]
  );
  await pool.end();
  return rows as Article[];
}

async function mariaBySlug(slug: string, lotteryCode: string): Promise<Article | undefined> {
  const mysql = await import('mysql2/promise');
  const pool = mysql.createPool({
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await pool.query(
    `SELECT ${FIELDS} FROM articles WHERE lottery_code = ? AND slug = ?`,
    [lotteryCode, slug]
  ) as [Article[], unknown];
  await pool.end();
  return rows[0];
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const useMaria = Boolean(process.env.DB_HOST);

export async function getAllArticles(lotteryCode = 'de'): Promise<Article[]> {
  return useMaria ? mariaAll(lotteryCode) : sqliteAll(lotteryCode);
}

export async function getArticleBySlug(slug: string, lotteryCode = 'de'): Promise<Article | undefined> {
  return useMaria ? mariaBySlug(slug, lotteryCode) : sqliteBySlug(slug, lotteryCode);
}

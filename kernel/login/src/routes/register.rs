use actix_web::{web, HttpResponse};
use sqlx::PgPool;
use chrono::Utc;
use uuid::Uuid;

#[allow(dead_code)]
#[derive(serde::Deserialize)]
pub struct FormData {
    email: String,
    username: String,
    passphrase: String
}

pub async fn register(form: web::Form<FormData>, pool: web::Data<PgPool>) -> HttpResponse {

    match sqlx::query!(
        r#"
        INSERT INTO users (id, email, username, created_at, passphrase)
        VALUES ($1, $2, $3, $4, $5)
        "#,
        Uuid::new_v4(),
        form.email,
        form.username,
        Utc::now(),
        form.passphrase
    )
    .execute(pool.get_ref())
    .await
    {
        Ok(_) => HttpResponse::Ok().finish(),
        Err(e) => {
            println!("Failed to execute query: {}", e);
            HttpResponse::InternalServerError().finish()
        }
    }
}

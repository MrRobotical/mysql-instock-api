/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = function (knex) {
    return knex.schema
      .createTable("warehouses", (table) => {
        table.increments("id").primary();
        table.string("warehouse_name").notNullable();
        table.string("address").notNullable();
        table.string("city").notNullable();
        table.string("country").notNullable();
        table.string("contact_name").notNullable();
        table.string("contact_position").notNullable();
        table.string("contact_email").notNullable();
        table.string("contact_phone").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
      .createTable("inventories", (table) => {
        table.increments("id").primary();
        table
          .integer("warehouse_id")
          .unsigned()
          .references("warehouses.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.string("item_name").notNullable();
        table.string('description',1000).notNullable();
        table.string('category').notNullable();
        table.string('status').notNullable();
        table.integer('quantity').notNullable().defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      });
  };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};

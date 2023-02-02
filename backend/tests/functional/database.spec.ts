import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'

test('connect to database', async ({ assert }) => {
  try {
    await Database.rawQuery('SHOW TABLES')
    assert.isTrue(true)
  } catch (e) {
    assert.isTrue(false)
  }
})

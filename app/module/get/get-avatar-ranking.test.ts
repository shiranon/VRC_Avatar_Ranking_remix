import { describe, expect, it, vi } from 'vitest'
import { localEnv } from '~/lib/test/localEnv'
import { createClient } from '../supabase/create-client.server'
import { getAvatarRanking } from './get-avatar-ranking'

const env = localEnv

const mockRequest = {
	headers: {
		get: vi.fn().mockReturnValue('http://localhost:3000'),
	},
} as unknown as Request

const { supabase } = createClient(mockRequest, env)

describe('getAvatarRanking関数のテスト(開発環境DBにアクセス)', () => {
	it('ランキングが取得できる', async () => {
		const type = 'day'
		const page = 1
		const date = '2024-08-20'

		const result = await getAvatarRanking(type, page, supabase, date)

		expect(result.data).toBeDefined()
		if (result.data) {
			expect(Array.isArray(result.data)).toBe(true)
			expect(result.data.length).toBeGreaterThan(0)
			expect(result.data[0]).toHaveProperty('booth_id')
			expect(result.data[0]).toHaveProperty('item_name')
		} else {
			fail('result.dataがnull')
		}
	})

	it('月間ランキングが取得できる', async () => {
		const type = 'month'
		const page = 1
		const date = '2024-09-30'

		const result = await getAvatarRanking(type, page, supabase, date)

		expect(result.data).toBeDefined()
		if (result.data) {
			expect(Array.isArray(result.data)).toBe(true)
			expect(result.data.length).toBeGreaterThan(0)
			expect(result.data[0]).toHaveProperty('booth_id')
			expect(result.data[0]).toHaveProperty('item_name')
		} else {
			fail('result.dataがnull')
		}
	})

	it('トレンドが取得できる', async () => {
		const type = 'trend'
		const page = 1
		const date = '2024-09-30'

		const result = await getAvatarRanking(type, page, supabase, date)

		expect(result.data).toBeDefined()
		if (result.data) {
			expect(Array.isArray(result.data)).toBe(true)
			expect(result.data.length).toBeGreaterThan(0)
			expect(result.data[0]).toHaveProperty('booth_id')
			expect(result.data[0]).toHaveProperty('item_name')
		} else {
			fail('result.dataがnull')
		}
	})

	it('データが存在しない日付を指定した場合はエラーになる', async () => {
		const type = 'day'
		const page = 1
		const date = '2023-08-26'

		const result = await getAvatarRanking(type, page, supabase, date)

		expect(result.data).toBeDefined()
		if (result.data) {
			expect(Array.isArray(result.data)).toBe(true)
			expect(result.data.length).toBe(0)
		} else {
			fail('result.dataがnull')
		}
	})

	it('不正なタイプを指定した場合エラーになる', async () => {
		const type = 'invalid_type'
		const page = 1
		const date = '2023-08-20'

		try {
			await getAvatarRanking(type, page, supabase, date)
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			expect((error as Error).message).toContain('Invalid ranking type')
		}
	})
})
function fail(arg0: string) {
	throw new Error('Function not implemented.')
}

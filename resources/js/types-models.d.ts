/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by laravel-typescriptable
declare namespace App.Models {
  export interface User {
    id?: number
    email_verified_at?: Date
    password?: any
  }
}

declare namespace App {
  export interface PaginateLink {
    url: string
    label: string
    active: boolean
  }
  export interface Paginate<T = any> {
    data: T[]
    current_page: number
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: App.PaginateLink[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
  }
  export interface ApiPaginate<T = any> {
    data: T[]
    links: {
      first?: string
      last?: string
      prev?: string
      next?: string
    }
    meta: {
      current_page: number
      from: number
      last_page: number
      links: App.PaginateLink[]
      path: string
      per_page: number
      to: number
      total: number
    }
  }
}

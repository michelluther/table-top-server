/**
 * Standard API response wrapper for successful responses
 */
export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
};

/**
 * Standard API response wrapper for error responses
 */
export type ApiErrorResponse = {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

/**
 * Union type for all API responses
 */
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Pagination params for list endpoints
 */
export type PaginationParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

/**
 * Paginated response wrapper
 */
export type PaginatedResponse<T> = {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

/**
 * Dice roll result
 */
export type DiceRoll = {
  dice: string; // e.g., "2d6+3"
  rolls: number[];
  modifier: number;
  total: number;
};

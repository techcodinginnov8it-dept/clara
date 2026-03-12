
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OriginStory
 * 
 */
export type OriginStory = $Result.DefaultSelection<Prisma.$OriginStoryPayload>
/**
 * Model MarketGap
 * 
 */
export type MarketGap = $Result.DefaultSelection<Prisma.$MarketGapPayload>
/**
 * Model TribalIdentity
 * 
 */
export type TribalIdentity = $Result.DefaultSelection<Prisma.$TribalIdentityPayload>
/**
 * Model UniqueMechanism
 * 
 */
export type UniqueMechanism = $Result.DefaultSelection<Prisma.$UniqueMechanismPayload>
/**
 * Model USPStatement
 * 
 */
export type USPStatement = $Result.DefaultSelection<Prisma.$USPStatementPayload>
/**
 * Model MessagingSummary
 * 
 */
export type MessagingSummary = $Result.DefaultSelection<Prisma.$MessagingSummaryPayload>
/**
 * Model GeneratedCourse
 * 
 */
export type GeneratedCourse = $Result.DefaultSelection<Prisma.$GeneratedCoursePayload>
/**
 * Model BrandBoard
 * 
 */
export type BrandBoard = $Result.DefaultSelection<Prisma.$BrandBoardPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.originStory`: Exposes CRUD operations for the **OriginStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginStories
    * const originStories = await prisma.originStory.findMany()
    * ```
    */
  get originStory(): Prisma.OriginStoryDelegate<ExtArgs>;

  /**
   * `prisma.marketGap`: Exposes CRUD operations for the **MarketGap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketGaps
    * const marketGaps = await prisma.marketGap.findMany()
    * ```
    */
  get marketGap(): Prisma.MarketGapDelegate<ExtArgs>;

  /**
   * `prisma.tribalIdentity`: Exposes CRUD operations for the **TribalIdentity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TribalIdentities
    * const tribalIdentities = await prisma.tribalIdentity.findMany()
    * ```
    */
  get tribalIdentity(): Prisma.TribalIdentityDelegate<ExtArgs>;

  /**
   * `prisma.uniqueMechanism`: Exposes CRUD operations for the **UniqueMechanism** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniqueMechanisms
    * const uniqueMechanisms = await prisma.uniqueMechanism.findMany()
    * ```
    */
  get uniqueMechanism(): Prisma.UniqueMechanismDelegate<ExtArgs>;

  /**
   * `prisma.uSPStatement`: Exposes CRUD operations for the **USPStatement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USPStatements
    * const uSPStatements = await prisma.uSPStatement.findMany()
    * ```
    */
  get uSPStatement(): Prisma.USPStatementDelegate<ExtArgs>;

  /**
   * `prisma.messagingSummary`: Exposes CRUD operations for the **MessagingSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessagingSummaries
    * const messagingSummaries = await prisma.messagingSummary.findMany()
    * ```
    */
  get messagingSummary(): Prisma.MessagingSummaryDelegate<ExtArgs>;

  /**
   * `prisma.generatedCourse`: Exposes CRUD operations for the **GeneratedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedCourses
    * const generatedCourses = await prisma.generatedCourse.findMany()
    * ```
    */
  get generatedCourse(): Prisma.GeneratedCourseDelegate<ExtArgs>;

  /**
   * `prisma.brandBoard`: Exposes CRUD operations for the **BrandBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandBoards
    * const brandBoards = await prisma.brandBoard.findMany()
    * ```
    */
  get brandBoard(): Prisma.BrandBoardDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OriginStory: 'OriginStory',
    MarketGap: 'MarketGap',
    TribalIdentity: 'TribalIdentity',
    UniqueMechanism: 'UniqueMechanism',
    USPStatement: 'USPStatement',
    MessagingSummary: 'MessagingSummary',
    GeneratedCourse: 'GeneratedCourse',
    BrandBoard: 'BrandBoard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "originStory" | "marketGap" | "tribalIdentity" | "uniqueMechanism" | "uSPStatement" | "messagingSummary" | "generatedCourse" | "brandBoard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OriginStory: {
        payload: Prisma.$OriginStoryPayload<ExtArgs>
        fields: Prisma.OriginStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          findFirst: {
            args: Prisma.OriginStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          findMany: {
            args: Prisma.OriginStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>[]
          }
          create: {
            args: Prisma.OriginStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          createMany: {
            args: Prisma.OriginStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginStoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>[]
          }
          delete: {
            args: Prisma.OriginStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          update: {
            args: Prisma.OriginStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          deleteMany: {
            args: Prisma.OriginStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OriginStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginStoryPayload>
          }
          aggregate: {
            args: Prisma.OriginStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginStory>
          }
          groupBy: {
            args: Prisma.OriginStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginStoryCountArgs<ExtArgs>
            result: $Utils.Optional<OriginStoryCountAggregateOutputType> | number
          }
        }
      }
      MarketGap: {
        payload: Prisma.$MarketGapPayload<ExtArgs>
        fields: Prisma.MarketGapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketGapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketGapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          findFirst: {
            args: Prisma.MarketGapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketGapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          findMany: {
            args: Prisma.MarketGapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>[]
          }
          create: {
            args: Prisma.MarketGapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          createMany: {
            args: Prisma.MarketGapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketGapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>[]
          }
          delete: {
            args: Prisma.MarketGapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          update: {
            args: Prisma.MarketGapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          deleteMany: {
            args: Prisma.MarketGapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketGapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketGapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketGapPayload>
          }
          aggregate: {
            args: Prisma.MarketGapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketGap>
          }
          groupBy: {
            args: Prisma.MarketGapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketGapCountArgs<ExtArgs>
            result: $Utils.Optional<MarketGapCountAggregateOutputType> | number
          }
        }
      }
      TribalIdentity: {
        payload: Prisma.$TribalIdentityPayload<ExtArgs>
        fields: Prisma.TribalIdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TribalIdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TribalIdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          findFirst: {
            args: Prisma.TribalIdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TribalIdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          findMany: {
            args: Prisma.TribalIdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>[]
          }
          create: {
            args: Prisma.TribalIdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          createMany: {
            args: Prisma.TribalIdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TribalIdentityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>[]
          }
          delete: {
            args: Prisma.TribalIdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          update: {
            args: Prisma.TribalIdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          deleteMany: {
            args: Prisma.TribalIdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TribalIdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TribalIdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TribalIdentityPayload>
          }
          aggregate: {
            args: Prisma.TribalIdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTribalIdentity>
          }
          groupBy: {
            args: Prisma.TribalIdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TribalIdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TribalIdentityCountArgs<ExtArgs>
            result: $Utils.Optional<TribalIdentityCountAggregateOutputType> | number
          }
        }
      }
      UniqueMechanism: {
        payload: Prisma.$UniqueMechanismPayload<ExtArgs>
        fields: Prisma.UniqueMechanismFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniqueMechanismFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniqueMechanismFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          findFirst: {
            args: Prisma.UniqueMechanismFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniqueMechanismFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          findMany: {
            args: Prisma.UniqueMechanismFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>[]
          }
          create: {
            args: Prisma.UniqueMechanismCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          createMany: {
            args: Prisma.UniqueMechanismCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniqueMechanismCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>[]
          }
          delete: {
            args: Prisma.UniqueMechanismDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          update: {
            args: Prisma.UniqueMechanismUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          deleteMany: {
            args: Prisma.UniqueMechanismDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniqueMechanismUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UniqueMechanismUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniqueMechanismPayload>
          }
          aggregate: {
            args: Prisma.UniqueMechanismAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniqueMechanism>
          }
          groupBy: {
            args: Prisma.UniqueMechanismGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniqueMechanismGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniqueMechanismCountArgs<ExtArgs>
            result: $Utils.Optional<UniqueMechanismCountAggregateOutputType> | number
          }
        }
      }
      USPStatement: {
        payload: Prisma.$USPStatementPayload<ExtArgs>
        fields: Prisma.USPStatementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USPStatementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USPStatementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          findFirst: {
            args: Prisma.USPStatementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USPStatementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          findMany: {
            args: Prisma.USPStatementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>[]
          }
          create: {
            args: Prisma.USPStatementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          createMany: {
            args: Prisma.USPStatementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.USPStatementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>[]
          }
          delete: {
            args: Prisma.USPStatementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          update: {
            args: Prisma.USPStatementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          deleteMany: {
            args: Prisma.USPStatementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USPStatementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USPStatementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USPStatementPayload>
          }
          aggregate: {
            args: Prisma.USPStatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSPStatement>
          }
          groupBy: {
            args: Prisma.USPStatementGroupByArgs<ExtArgs>
            result: $Utils.Optional<USPStatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.USPStatementCountArgs<ExtArgs>
            result: $Utils.Optional<USPStatementCountAggregateOutputType> | number
          }
        }
      }
      MessagingSummary: {
        payload: Prisma.$MessagingSummaryPayload<ExtArgs>
        fields: Prisma.MessagingSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagingSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagingSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          findFirst: {
            args: Prisma.MessagingSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagingSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          findMany: {
            args: Prisma.MessagingSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>[]
          }
          create: {
            args: Prisma.MessagingSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          createMany: {
            args: Prisma.MessagingSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagingSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>[]
          }
          delete: {
            args: Prisma.MessagingSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          update: {
            args: Prisma.MessagingSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          deleteMany: {
            args: Prisma.MessagingSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagingSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessagingSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagingSummaryPayload>
          }
          aggregate: {
            args: Prisma.MessagingSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessagingSummary>
          }
          groupBy: {
            args: Prisma.MessagingSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagingSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagingSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<MessagingSummaryCountAggregateOutputType> | number
          }
        }
      }
      GeneratedCourse: {
        payload: Prisma.$GeneratedCoursePayload<ExtArgs>
        fields: Prisma.GeneratedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          findFirst: {
            args: Prisma.GeneratedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          findMany: {
            args: Prisma.GeneratedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>[]
          }
          create: {
            args: Prisma.GeneratedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          createMany: {
            args: Prisma.GeneratedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>[]
          }
          delete: {
            args: Prisma.GeneratedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          update: {
            args: Prisma.GeneratedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          deleteMany: {
            args: Prisma.GeneratedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneratedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedCoursePayload>
          }
          aggregate: {
            args: Prisma.GeneratedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedCourse>
          }
          groupBy: {
            args: Prisma.GeneratedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedCourseCountAggregateOutputType> | number
          }
        }
      }
      BrandBoard: {
        payload: Prisma.$BrandBoardPayload<ExtArgs>
        fields: Prisma.BrandBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          findFirst: {
            args: Prisma.BrandBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          findMany: {
            args: Prisma.BrandBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>[]
          }
          create: {
            args: Prisma.BrandBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          createMany: {
            args: Prisma.BrandBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>[]
          }
          delete: {
            args: Prisma.BrandBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          update: {
            args: Prisma.BrandBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          deleteMany: {
            args: Prisma.BrandBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BrandBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandBoardPayload>
          }
          aggregate: {
            args: Prisma.BrandBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrandBoard>
          }
          groupBy: {
            args: Prisma.BrandBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandBoardCountArgs<ExtArgs>
            result: $Utils.Optional<BrandBoardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    brandBoards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    brandBoards?: boolean | UserCountOutputTypeCountBrandBoardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrandBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandBoardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originStory?: boolean | User$originStoryArgs<ExtArgs>
    marketGap?: boolean | User$marketGapArgs<ExtArgs>
    tribe?: boolean | User$tribeArgs<ExtArgs>
    mechanism?: boolean | User$mechanismArgs<ExtArgs>
    usp?: boolean | User$uspArgs<ExtArgs>
    summary?: boolean | User$summaryArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    brandBoards?: boolean | User$brandBoardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originStory?: boolean | User$originStoryArgs<ExtArgs>
    marketGap?: boolean | User$marketGapArgs<ExtArgs>
    tribe?: boolean | User$tribeArgs<ExtArgs>
    mechanism?: boolean | User$mechanismArgs<ExtArgs>
    usp?: boolean | User$uspArgs<ExtArgs>
    summary?: boolean | User$summaryArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    brandBoards?: boolean | User$brandBoardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      originStory: Prisma.$OriginStoryPayload<ExtArgs> | null
      marketGap: Prisma.$MarketGapPayload<ExtArgs> | null
      tribe: Prisma.$TribalIdentityPayload<ExtArgs> | null
      mechanism: Prisma.$UniqueMechanismPayload<ExtArgs> | null
      usp: Prisma.$USPStatementPayload<ExtArgs> | null
      summary: Prisma.$MessagingSummaryPayload<ExtArgs> | null
      courses: Prisma.$GeneratedCoursePayload<ExtArgs>[]
      brandBoards: Prisma.$BrandBoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originStory<T extends User$originStoryArgs<ExtArgs> = {}>(args?: Subset<T, User$originStoryArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    marketGap<T extends User$marketGapArgs<ExtArgs> = {}>(args?: Subset<T, User$marketGapArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tribe<T extends User$tribeArgs<ExtArgs> = {}>(args?: Subset<T, User$tribeArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mechanism<T extends User$mechanismArgs<ExtArgs> = {}>(args?: Subset<T, User$mechanismArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    usp<T extends User$uspArgs<ExtArgs> = {}>(args?: Subset<T, User$uspArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    summary<T extends User$summaryArgs<ExtArgs> = {}>(args?: Subset<T, User$summaryArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findMany"> | Null>
    brandBoards<T extends User$brandBoardsArgs<ExtArgs> = {}>(args?: Subset<T, User$brandBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.originStory
   */
  export type User$originStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    where?: OriginStoryWhereInput
  }

  /**
   * User.marketGap
   */
  export type User$marketGapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    where?: MarketGapWhereInput
  }

  /**
   * User.tribe
   */
  export type User$tribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    where?: TribalIdentityWhereInput
  }

  /**
   * User.mechanism
   */
  export type User$mechanismArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    where?: UniqueMechanismWhereInput
  }

  /**
   * User.usp
   */
  export type User$uspArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    where?: USPStatementWhereInput
  }

  /**
   * User.summary
   */
  export type User$summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    where?: MessagingSummaryWhereInput
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    where?: GeneratedCourseWhereInput
    orderBy?: GeneratedCourseOrderByWithRelationInput | GeneratedCourseOrderByWithRelationInput[]
    cursor?: GeneratedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedCourseScalarFieldEnum | GeneratedCourseScalarFieldEnum[]
  }

  /**
   * User.brandBoards
   */
  export type User$brandBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    where?: BrandBoardWhereInput
    orderBy?: BrandBoardOrderByWithRelationInput | BrandBoardOrderByWithRelationInput[]
    cursor?: BrandBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandBoardScalarFieldEnum | BrandBoardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OriginStory
   */

  export type AggregateOriginStory = {
    _count: OriginStoryCountAggregateOutputType | null
    _min: OriginStoryMinAggregateOutputType | null
    _max: OriginStoryMaxAggregateOutputType | null
  }

  export type OriginStoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedStory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginStoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedStory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OriginStoryCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedStory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OriginStoryMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedStory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginStoryMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedStory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OriginStoryCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedStory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OriginStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginStory to aggregate.
     */
    where?: OriginStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginStories to fetch.
     */
    orderBy?: OriginStoryOrderByWithRelationInput | OriginStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginStories
    **/
    _count?: true | OriginStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginStoryMaxAggregateInputType
  }

  export type GetOriginStoryAggregateType<T extends OriginStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginStory[P]>
      : GetScalarType<T[P], AggregateOriginStory[P]>
  }




  export type OriginStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginStoryWhereInput
    orderBy?: OriginStoryOrderByWithAggregationInput | OriginStoryOrderByWithAggregationInput[]
    by: OriginStoryScalarFieldEnum[] | OriginStoryScalarFieldEnum
    having?: OriginStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginStoryCountAggregateInputType | true
    _min?: OriginStoryMinAggregateInputType
    _max?: OriginStoryMaxAggregateInputType
  }

  export type OriginStoryGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedStory: string | null
    createdAt: Date
    updatedAt: Date
    _count: OriginStoryCountAggregateOutputType | null
    _min: OriginStoryMinAggregateOutputType | null
    _max: OriginStoryMaxAggregateOutputType | null
  }

  type GetOriginStoryGroupByPayload<T extends OriginStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginStoryGroupByOutputType[P]>
            : GetScalarType<T[P], OriginStoryGroupByOutputType[P]>
        }
      >
    >


  export type OriginStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedStory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originStory"]>

  export type OriginStorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedStory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originStory"]>

  export type OriginStorySelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedStory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OriginStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OriginStoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OriginStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginStory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedStory: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["originStory"]>
    composites: {}
  }

  type OriginStoryGetPayload<S extends boolean | null | undefined | OriginStoryDefaultArgs> = $Result.GetResult<Prisma.$OriginStoryPayload, S>

  type OriginStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OriginStoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OriginStoryCountAggregateInputType | true
    }

  export interface OriginStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginStory'], meta: { name: 'OriginStory' } }
    /**
     * Find zero or one OriginStory that matches the filter.
     * @param {OriginStoryFindUniqueArgs} args - Arguments to find a OriginStory
     * @example
     * // Get one OriginStory
     * const originStory = await prisma.originStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginStoryFindUniqueArgs>(args: SelectSubset<T, OriginStoryFindUniqueArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OriginStory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OriginStoryFindUniqueOrThrowArgs} args - Arguments to find a OriginStory
     * @example
     * // Get one OriginStory
     * const originStory = await prisma.originStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OriginStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryFindFirstArgs} args - Arguments to find a OriginStory
     * @example
     * // Get one OriginStory
     * const originStory = await prisma.originStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginStoryFindFirstArgs>(args?: SelectSubset<T, OriginStoryFindFirstArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OriginStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryFindFirstOrThrowArgs} args - Arguments to find a OriginStory
     * @example
     * // Get one OriginStory
     * const originStory = await prisma.originStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OriginStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginStories
     * const originStories = await prisma.originStory.findMany()
     * 
     * // Get first 10 OriginStories
     * const originStories = await prisma.originStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originStoryWithIdOnly = await prisma.originStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginStoryFindManyArgs>(args?: SelectSubset<T, OriginStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OriginStory.
     * @param {OriginStoryCreateArgs} args - Arguments to create a OriginStory.
     * @example
     * // Create one OriginStory
     * const OriginStory = await prisma.originStory.create({
     *   data: {
     *     // ... data to create a OriginStory
     *   }
     * })
     * 
     */
    create<T extends OriginStoryCreateArgs>(args: SelectSubset<T, OriginStoryCreateArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OriginStories.
     * @param {OriginStoryCreateManyArgs} args - Arguments to create many OriginStories.
     * @example
     * // Create many OriginStories
     * const originStory = await prisma.originStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginStoryCreateManyArgs>(args?: SelectSubset<T, OriginStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginStories and returns the data saved in the database.
     * @param {OriginStoryCreateManyAndReturnArgs} args - Arguments to create many OriginStories.
     * @example
     * // Create many OriginStories
     * const originStory = await prisma.originStory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginStories and only return the `id`
     * const originStoryWithIdOnly = await prisma.originStory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginStoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginStoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OriginStory.
     * @param {OriginStoryDeleteArgs} args - Arguments to delete one OriginStory.
     * @example
     * // Delete one OriginStory
     * const OriginStory = await prisma.originStory.delete({
     *   where: {
     *     // ... filter to delete one OriginStory
     *   }
     * })
     * 
     */
    delete<T extends OriginStoryDeleteArgs>(args: SelectSubset<T, OriginStoryDeleteArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OriginStory.
     * @param {OriginStoryUpdateArgs} args - Arguments to update one OriginStory.
     * @example
     * // Update one OriginStory
     * const originStory = await prisma.originStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginStoryUpdateArgs>(args: SelectSubset<T, OriginStoryUpdateArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OriginStories.
     * @param {OriginStoryDeleteManyArgs} args - Arguments to filter OriginStories to delete.
     * @example
     * // Delete a few OriginStories
     * const { count } = await prisma.originStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginStoryDeleteManyArgs>(args?: SelectSubset<T, OriginStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginStories
     * const originStory = await prisma.originStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginStoryUpdateManyArgs>(args: SelectSubset<T, OriginStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OriginStory.
     * @param {OriginStoryUpsertArgs} args - Arguments to update or create a OriginStory.
     * @example
     * // Update or create a OriginStory
     * const originStory = await prisma.originStory.upsert({
     *   create: {
     *     // ... data to create a OriginStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginStory we want to update
     *   }
     * })
     */
    upsert<T extends OriginStoryUpsertArgs>(args: SelectSubset<T, OriginStoryUpsertArgs<ExtArgs>>): Prisma__OriginStoryClient<$Result.GetResult<Prisma.$OriginStoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OriginStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryCountArgs} args - Arguments to filter OriginStories to count.
     * @example
     * // Count the number of OriginStories
     * const count = await prisma.originStory.count({
     *   where: {
     *     // ... the filter for the OriginStories we want to count
     *   }
     * })
    **/
    count<T extends OriginStoryCountArgs>(
      args?: Subset<T, OriginStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OriginStoryAggregateArgs>(args: Subset<T, OriginStoryAggregateArgs>): Prisma.PrismaPromise<GetOriginStoryAggregateType<T>>

    /**
     * Group by OriginStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginStoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OriginStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginStoryGroupByArgs['orderBy'] }
        : { orderBy?: OriginStoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OriginStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginStory model
   */
  readonly fields: OriginStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OriginStory model
   */ 
  interface OriginStoryFieldRefs {
    readonly id: FieldRef<"OriginStory", 'String'>
    readonly userId: FieldRef<"OriginStory", 'String'>
    readonly answers: FieldRef<"OriginStory", 'String'>
    readonly generatedStory: FieldRef<"OriginStory", 'String'>
    readonly createdAt: FieldRef<"OriginStory", 'DateTime'>
    readonly updatedAt: FieldRef<"OriginStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OriginStory findUnique
   */
  export type OriginStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter, which OriginStory to fetch.
     */
    where: OriginStoryWhereUniqueInput
  }

  /**
   * OriginStory findUniqueOrThrow
   */
  export type OriginStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter, which OriginStory to fetch.
     */
    where: OriginStoryWhereUniqueInput
  }

  /**
   * OriginStory findFirst
   */
  export type OriginStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter, which OriginStory to fetch.
     */
    where?: OriginStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginStories to fetch.
     */
    orderBy?: OriginStoryOrderByWithRelationInput | OriginStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginStories.
     */
    cursor?: OriginStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginStories.
     */
    distinct?: OriginStoryScalarFieldEnum | OriginStoryScalarFieldEnum[]
  }

  /**
   * OriginStory findFirstOrThrow
   */
  export type OriginStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter, which OriginStory to fetch.
     */
    where?: OriginStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginStories to fetch.
     */
    orderBy?: OriginStoryOrderByWithRelationInput | OriginStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginStories.
     */
    cursor?: OriginStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginStories.
     */
    distinct?: OriginStoryScalarFieldEnum | OriginStoryScalarFieldEnum[]
  }

  /**
   * OriginStory findMany
   */
  export type OriginStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter, which OriginStories to fetch.
     */
    where?: OriginStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginStories to fetch.
     */
    orderBy?: OriginStoryOrderByWithRelationInput | OriginStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginStories.
     */
    cursor?: OriginStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginStories.
     */
    skip?: number
    distinct?: OriginStoryScalarFieldEnum | OriginStoryScalarFieldEnum[]
  }

  /**
   * OriginStory create
   */
  export type OriginStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginStory.
     */
    data: XOR<OriginStoryCreateInput, OriginStoryUncheckedCreateInput>
  }

  /**
   * OriginStory createMany
   */
  export type OriginStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginStories.
     */
    data: OriginStoryCreateManyInput | OriginStoryCreateManyInput[]
  }

  /**
   * OriginStory createManyAndReturn
   */
  export type OriginStoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OriginStories.
     */
    data: OriginStoryCreateManyInput | OriginStoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginStory update
   */
  export type OriginStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginStory.
     */
    data: XOR<OriginStoryUpdateInput, OriginStoryUncheckedUpdateInput>
    /**
     * Choose, which OriginStory to update.
     */
    where: OriginStoryWhereUniqueInput
  }

  /**
   * OriginStory updateMany
   */
  export type OriginStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginStories.
     */
    data: XOR<OriginStoryUpdateManyMutationInput, OriginStoryUncheckedUpdateManyInput>
    /**
     * Filter which OriginStories to update
     */
    where?: OriginStoryWhereInput
  }

  /**
   * OriginStory upsert
   */
  export type OriginStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginStory to update in case it exists.
     */
    where: OriginStoryWhereUniqueInput
    /**
     * In case the OriginStory found by the `where` argument doesn't exist, create a new OriginStory with this data.
     */
    create: XOR<OriginStoryCreateInput, OriginStoryUncheckedCreateInput>
    /**
     * In case the OriginStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginStoryUpdateInput, OriginStoryUncheckedUpdateInput>
  }

  /**
   * OriginStory delete
   */
  export type OriginStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
    /**
     * Filter which OriginStory to delete.
     */
    where: OriginStoryWhereUniqueInput
  }

  /**
   * OriginStory deleteMany
   */
  export type OriginStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginStories to delete
     */
    where?: OriginStoryWhereInput
  }

  /**
   * OriginStory without action
   */
  export type OriginStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginStory
     */
    select?: OriginStorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginStoryInclude<ExtArgs> | null
  }


  /**
   * Model MarketGap
   */

  export type AggregateMarketGap = {
    _count: MarketGapCountAggregateOutputType | null
    _min: MarketGapMinAggregateOutputType | null
    _max: MarketGapMaxAggregateOutputType | null
  }

  export type MarketGapMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketGapMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketGapCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketGapMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketGapMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketGapCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketGapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketGap to aggregate.
     */
    where?: MarketGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketGaps to fetch.
     */
    orderBy?: MarketGapOrderByWithRelationInput | MarketGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketGaps
    **/
    _count?: true | MarketGapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketGapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketGapMaxAggregateInputType
  }

  export type GetMarketGapAggregateType<T extends MarketGapAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketGap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketGap[P]>
      : GetScalarType<T[P], AggregateMarketGap[P]>
  }




  export type MarketGapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketGapWhereInput
    orderBy?: MarketGapOrderByWithAggregationInput | MarketGapOrderByWithAggregationInput[]
    by: MarketGapScalarFieldEnum[] | MarketGapScalarFieldEnum
    having?: MarketGapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketGapCountAggregateInputType | true
    _min?: MarketGapMinAggregateInputType
    _max?: MarketGapMaxAggregateInputType
  }

  export type MarketGapGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: MarketGapCountAggregateOutputType | null
    _min: MarketGapMinAggregateOutputType | null
    _max: MarketGapMaxAggregateOutputType | null
  }

  type GetMarketGapGroupByPayload<T extends MarketGapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGapGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGapGroupByOutputType[P]>
        }
      >
    >


  export type MarketGapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketGap"]>

  export type MarketGapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketGap"]>

  export type MarketGapSelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketGapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarketGapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MarketGapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketGap"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marketGap"]>
    composites: {}
  }

  type MarketGapGetPayload<S extends boolean | null | undefined | MarketGapDefaultArgs> = $Result.GetResult<Prisma.$MarketGapPayload, S>

  type MarketGapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketGapFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketGapCountAggregateInputType | true
    }

  export interface MarketGapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketGap'], meta: { name: 'MarketGap' } }
    /**
     * Find zero or one MarketGap that matches the filter.
     * @param {MarketGapFindUniqueArgs} args - Arguments to find a MarketGap
     * @example
     * // Get one MarketGap
     * const marketGap = await prisma.marketGap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketGapFindUniqueArgs>(args: SelectSubset<T, MarketGapFindUniqueArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketGap that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketGapFindUniqueOrThrowArgs} args - Arguments to find a MarketGap
     * @example
     * // Get one MarketGap
     * const marketGap = await prisma.marketGap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketGapFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketGapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketGap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapFindFirstArgs} args - Arguments to find a MarketGap
     * @example
     * // Get one MarketGap
     * const marketGap = await prisma.marketGap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketGapFindFirstArgs>(args?: SelectSubset<T, MarketGapFindFirstArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketGap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapFindFirstOrThrowArgs} args - Arguments to find a MarketGap
     * @example
     * // Get one MarketGap
     * const marketGap = await prisma.marketGap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketGapFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketGapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketGaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketGaps
     * const marketGaps = await prisma.marketGap.findMany()
     * 
     * // Get first 10 MarketGaps
     * const marketGaps = await prisma.marketGap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketGapWithIdOnly = await prisma.marketGap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketGapFindManyArgs>(args?: SelectSubset<T, MarketGapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketGap.
     * @param {MarketGapCreateArgs} args - Arguments to create a MarketGap.
     * @example
     * // Create one MarketGap
     * const MarketGap = await prisma.marketGap.create({
     *   data: {
     *     // ... data to create a MarketGap
     *   }
     * })
     * 
     */
    create<T extends MarketGapCreateArgs>(args: SelectSubset<T, MarketGapCreateArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketGaps.
     * @param {MarketGapCreateManyArgs} args - Arguments to create many MarketGaps.
     * @example
     * // Create many MarketGaps
     * const marketGap = await prisma.marketGap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketGapCreateManyArgs>(args?: SelectSubset<T, MarketGapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketGaps and returns the data saved in the database.
     * @param {MarketGapCreateManyAndReturnArgs} args - Arguments to create many MarketGaps.
     * @example
     * // Create many MarketGaps
     * const marketGap = await prisma.marketGap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketGaps and only return the `id`
     * const marketGapWithIdOnly = await prisma.marketGap.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketGapCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketGapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarketGap.
     * @param {MarketGapDeleteArgs} args - Arguments to delete one MarketGap.
     * @example
     * // Delete one MarketGap
     * const MarketGap = await prisma.marketGap.delete({
     *   where: {
     *     // ... filter to delete one MarketGap
     *   }
     * })
     * 
     */
    delete<T extends MarketGapDeleteArgs>(args: SelectSubset<T, MarketGapDeleteArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketGap.
     * @param {MarketGapUpdateArgs} args - Arguments to update one MarketGap.
     * @example
     * // Update one MarketGap
     * const marketGap = await prisma.marketGap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketGapUpdateArgs>(args: SelectSubset<T, MarketGapUpdateArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketGaps.
     * @param {MarketGapDeleteManyArgs} args - Arguments to filter MarketGaps to delete.
     * @example
     * // Delete a few MarketGaps
     * const { count } = await prisma.marketGap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketGapDeleteManyArgs>(args?: SelectSubset<T, MarketGapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketGaps
     * const marketGap = await prisma.marketGap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketGapUpdateManyArgs>(args: SelectSubset<T, MarketGapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketGap.
     * @param {MarketGapUpsertArgs} args - Arguments to update or create a MarketGap.
     * @example
     * // Update or create a MarketGap
     * const marketGap = await prisma.marketGap.upsert({
     *   create: {
     *     // ... data to create a MarketGap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketGap we want to update
     *   }
     * })
     */
    upsert<T extends MarketGapUpsertArgs>(args: SelectSubset<T, MarketGapUpsertArgs<ExtArgs>>): Prisma__MarketGapClient<$Result.GetResult<Prisma.$MarketGapPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketGaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapCountArgs} args - Arguments to filter MarketGaps to count.
     * @example
     * // Count the number of MarketGaps
     * const count = await prisma.marketGap.count({
     *   where: {
     *     // ... the filter for the MarketGaps we want to count
     *   }
     * })
    **/
    count<T extends MarketGapCountArgs>(
      args?: Subset<T, MarketGapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketGapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketGapAggregateArgs>(args: Subset<T, MarketGapAggregateArgs>): Prisma.PrismaPromise<GetMarketGapAggregateType<T>>

    /**
     * Group by MarketGap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGapGroupByArgs['orderBy'] }
        : { orderBy?: MarketGapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketGap model
   */
  readonly fields: MarketGapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketGap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketGapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketGap model
   */ 
  interface MarketGapFieldRefs {
    readonly id: FieldRef<"MarketGap", 'String'>
    readonly userId: FieldRef<"MarketGap", 'String'>
    readonly answers: FieldRef<"MarketGap", 'String'>
    readonly generatedReport: FieldRef<"MarketGap", 'String'>
    readonly createdAt: FieldRef<"MarketGap", 'DateTime'>
    readonly updatedAt: FieldRef<"MarketGap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketGap findUnique
   */
  export type MarketGapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter, which MarketGap to fetch.
     */
    where: MarketGapWhereUniqueInput
  }

  /**
   * MarketGap findUniqueOrThrow
   */
  export type MarketGapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter, which MarketGap to fetch.
     */
    where: MarketGapWhereUniqueInput
  }

  /**
   * MarketGap findFirst
   */
  export type MarketGapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter, which MarketGap to fetch.
     */
    where?: MarketGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketGaps to fetch.
     */
    orderBy?: MarketGapOrderByWithRelationInput | MarketGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketGaps.
     */
    cursor?: MarketGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketGaps.
     */
    distinct?: MarketGapScalarFieldEnum | MarketGapScalarFieldEnum[]
  }

  /**
   * MarketGap findFirstOrThrow
   */
  export type MarketGapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter, which MarketGap to fetch.
     */
    where?: MarketGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketGaps to fetch.
     */
    orderBy?: MarketGapOrderByWithRelationInput | MarketGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketGaps.
     */
    cursor?: MarketGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketGaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketGaps.
     */
    distinct?: MarketGapScalarFieldEnum | MarketGapScalarFieldEnum[]
  }

  /**
   * MarketGap findMany
   */
  export type MarketGapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter, which MarketGaps to fetch.
     */
    where?: MarketGapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketGaps to fetch.
     */
    orderBy?: MarketGapOrderByWithRelationInput | MarketGapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketGaps.
     */
    cursor?: MarketGapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketGaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketGaps.
     */
    skip?: number
    distinct?: MarketGapScalarFieldEnum | MarketGapScalarFieldEnum[]
  }

  /**
   * MarketGap create
   */
  export type MarketGapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketGap.
     */
    data: XOR<MarketGapCreateInput, MarketGapUncheckedCreateInput>
  }

  /**
   * MarketGap createMany
   */
  export type MarketGapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketGaps.
     */
    data: MarketGapCreateManyInput | MarketGapCreateManyInput[]
  }

  /**
   * MarketGap createManyAndReturn
   */
  export type MarketGapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarketGaps.
     */
    data: MarketGapCreateManyInput | MarketGapCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketGap update
   */
  export type MarketGapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketGap.
     */
    data: XOR<MarketGapUpdateInput, MarketGapUncheckedUpdateInput>
    /**
     * Choose, which MarketGap to update.
     */
    where: MarketGapWhereUniqueInput
  }

  /**
   * MarketGap updateMany
   */
  export type MarketGapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketGaps.
     */
    data: XOR<MarketGapUpdateManyMutationInput, MarketGapUncheckedUpdateManyInput>
    /**
     * Filter which MarketGaps to update
     */
    where?: MarketGapWhereInput
  }

  /**
   * MarketGap upsert
   */
  export type MarketGapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketGap to update in case it exists.
     */
    where: MarketGapWhereUniqueInput
    /**
     * In case the MarketGap found by the `where` argument doesn't exist, create a new MarketGap with this data.
     */
    create: XOR<MarketGapCreateInput, MarketGapUncheckedCreateInput>
    /**
     * In case the MarketGap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketGapUpdateInput, MarketGapUncheckedUpdateInput>
  }

  /**
   * MarketGap delete
   */
  export type MarketGapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
    /**
     * Filter which MarketGap to delete.
     */
    where: MarketGapWhereUniqueInput
  }

  /**
   * MarketGap deleteMany
   */
  export type MarketGapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketGaps to delete
     */
    where?: MarketGapWhereInput
  }

  /**
   * MarketGap without action
   */
  export type MarketGapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketGap
     */
    select?: MarketGapSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketGapInclude<ExtArgs> | null
  }


  /**
   * Model TribalIdentity
   */

  export type AggregateTribalIdentity = {
    _count: TribalIdentityCountAggregateOutputType | null
    _min: TribalIdentityMinAggregateOutputType | null
    _max: TribalIdentityMaxAggregateOutputType | null
  }

  export type TribalIdentityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TribalIdentityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TribalIdentityCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TribalIdentityMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TribalIdentityMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TribalIdentityCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TribalIdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TribalIdentity to aggregate.
     */
    where?: TribalIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TribalIdentities to fetch.
     */
    orderBy?: TribalIdentityOrderByWithRelationInput | TribalIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TribalIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TribalIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TribalIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TribalIdentities
    **/
    _count?: true | TribalIdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TribalIdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TribalIdentityMaxAggregateInputType
  }

  export type GetTribalIdentityAggregateType<T extends TribalIdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateTribalIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTribalIdentity[P]>
      : GetScalarType<T[P], AggregateTribalIdentity[P]>
  }




  export type TribalIdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TribalIdentityWhereInput
    orderBy?: TribalIdentityOrderByWithAggregationInput | TribalIdentityOrderByWithAggregationInput[]
    by: TribalIdentityScalarFieldEnum[] | TribalIdentityScalarFieldEnum
    having?: TribalIdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TribalIdentityCountAggregateInputType | true
    _min?: TribalIdentityMinAggregateInputType
    _max?: TribalIdentityMaxAggregateInputType
  }

  export type TribalIdentityGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: TribalIdentityCountAggregateOutputType | null
    _min: TribalIdentityMinAggregateOutputType | null
    _max: TribalIdentityMaxAggregateOutputType | null
  }

  type GetTribalIdentityGroupByPayload<T extends TribalIdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TribalIdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TribalIdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TribalIdentityGroupByOutputType[P]>
            : GetScalarType<T[P], TribalIdentityGroupByOutputType[P]>
        }
      >
    >


  export type TribalIdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tribalIdentity"]>

  export type TribalIdentitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tribalIdentity"]>

  export type TribalIdentitySelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TribalIdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TribalIdentityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TribalIdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TribalIdentity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tribalIdentity"]>
    composites: {}
  }

  type TribalIdentityGetPayload<S extends boolean | null | undefined | TribalIdentityDefaultArgs> = $Result.GetResult<Prisma.$TribalIdentityPayload, S>

  type TribalIdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TribalIdentityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TribalIdentityCountAggregateInputType | true
    }

  export interface TribalIdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TribalIdentity'], meta: { name: 'TribalIdentity' } }
    /**
     * Find zero or one TribalIdentity that matches the filter.
     * @param {TribalIdentityFindUniqueArgs} args - Arguments to find a TribalIdentity
     * @example
     * // Get one TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TribalIdentityFindUniqueArgs>(args: SelectSubset<T, TribalIdentityFindUniqueArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TribalIdentity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TribalIdentityFindUniqueOrThrowArgs} args - Arguments to find a TribalIdentity
     * @example
     * // Get one TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TribalIdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, TribalIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TribalIdentity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityFindFirstArgs} args - Arguments to find a TribalIdentity
     * @example
     * // Get one TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TribalIdentityFindFirstArgs>(args?: SelectSubset<T, TribalIdentityFindFirstArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TribalIdentity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityFindFirstOrThrowArgs} args - Arguments to find a TribalIdentity
     * @example
     * // Get one TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TribalIdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, TribalIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TribalIdentities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TribalIdentities
     * const tribalIdentities = await prisma.tribalIdentity.findMany()
     * 
     * // Get first 10 TribalIdentities
     * const tribalIdentities = await prisma.tribalIdentity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tribalIdentityWithIdOnly = await prisma.tribalIdentity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TribalIdentityFindManyArgs>(args?: SelectSubset<T, TribalIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TribalIdentity.
     * @param {TribalIdentityCreateArgs} args - Arguments to create a TribalIdentity.
     * @example
     * // Create one TribalIdentity
     * const TribalIdentity = await prisma.tribalIdentity.create({
     *   data: {
     *     // ... data to create a TribalIdentity
     *   }
     * })
     * 
     */
    create<T extends TribalIdentityCreateArgs>(args: SelectSubset<T, TribalIdentityCreateArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TribalIdentities.
     * @param {TribalIdentityCreateManyArgs} args - Arguments to create many TribalIdentities.
     * @example
     * // Create many TribalIdentities
     * const tribalIdentity = await prisma.tribalIdentity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TribalIdentityCreateManyArgs>(args?: SelectSubset<T, TribalIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TribalIdentities and returns the data saved in the database.
     * @param {TribalIdentityCreateManyAndReturnArgs} args - Arguments to create many TribalIdentities.
     * @example
     * // Create many TribalIdentities
     * const tribalIdentity = await prisma.tribalIdentity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TribalIdentities and only return the `id`
     * const tribalIdentityWithIdOnly = await prisma.tribalIdentity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TribalIdentityCreateManyAndReturnArgs>(args?: SelectSubset<T, TribalIdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TribalIdentity.
     * @param {TribalIdentityDeleteArgs} args - Arguments to delete one TribalIdentity.
     * @example
     * // Delete one TribalIdentity
     * const TribalIdentity = await prisma.tribalIdentity.delete({
     *   where: {
     *     // ... filter to delete one TribalIdentity
     *   }
     * })
     * 
     */
    delete<T extends TribalIdentityDeleteArgs>(args: SelectSubset<T, TribalIdentityDeleteArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TribalIdentity.
     * @param {TribalIdentityUpdateArgs} args - Arguments to update one TribalIdentity.
     * @example
     * // Update one TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TribalIdentityUpdateArgs>(args: SelectSubset<T, TribalIdentityUpdateArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TribalIdentities.
     * @param {TribalIdentityDeleteManyArgs} args - Arguments to filter TribalIdentities to delete.
     * @example
     * // Delete a few TribalIdentities
     * const { count } = await prisma.tribalIdentity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TribalIdentityDeleteManyArgs>(args?: SelectSubset<T, TribalIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TribalIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TribalIdentities
     * const tribalIdentity = await prisma.tribalIdentity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TribalIdentityUpdateManyArgs>(args: SelectSubset<T, TribalIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TribalIdentity.
     * @param {TribalIdentityUpsertArgs} args - Arguments to update or create a TribalIdentity.
     * @example
     * // Update or create a TribalIdentity
     * const tribalIdentity = await prisma.tribalIdentity.upsert({
     *   create: {
     *     // ... data to create a TribalIdentity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TribalIdentity we want to update
     *   }
     * })
     */
    upsert<T extends TribalIdentityUpsertArgs>(args: SelectSubset<T, TribalIdentityUpsertArgs<ExtArgs>>): Prisma__TribalIdentityClient<$Result.GetResult<Prisma.$TribalIdentityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TribalIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityCountArgs} args - Arguments to filter TribalIdentities to count.
     * @example
     * // Count the number of TribalIdentities
     * const count = await prisma.tribalIdentity.count({
     *   where: {
     *     // ... the filter for the TribalIdentities we want to count
     *   }
     * })
    **/
    count<T extends TribalIdentityCountArgs>(
      args?: Subset<T, TribalIdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TribalIdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TribalIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TribalIdentityAggregateArgs>(args: Subset<T, TribalIdentityAggregateArgs>): Prisma.PrismaPromise<GetTribalIdentityAggregateType<T>>

    /**
     * Group by TribalIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TribalIdentityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TribalIdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TribalIdentityGroupByArgs['orderBy'] }
        : { orderBy?: TribalIdentityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TribalIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTribalIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TribalIdentity model
   */
  readonly fields: TribalIdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TribalIdentity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TribalIdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TribalIdentity model
   */ 
  interface TribalIdentityFieldRefs {
    readonly id: FieldRef<"TribalIdentity", 'String'>
    readonly userId: FieldRef<"TribalIdentity", 'String'>
    readonly answers: FieldRef<"TribalIdentity", 'String'>
    readonly generatedReport: FieldRef<"TribalIdentity", 'String'>
    readonly createdAt: FieldRef<"TribalIdentity", 'DateTime'>
    readonly updatedAt: FieldRef<"TribalIdentity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TribalIdentity findUnique
   */
  export type TribalIdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter, which TribalIdentity to fetch.
     */
    where: TribalIdentityWhereUniqueInput
  }

  /**
   * TribalIdentity findUniqueOrThrow
   */
  export type TribalIdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter, which TribalIdentity to fetch.
     */
    where: TribalIdentityWhereUniqueInput
  }

  /**
   * TribalIdentity findFirst
   */
  export type TribalIdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter, which TribalIdentity to fetch.
     */
    where?: TribalIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TribalIdentities to fetch.
     */
    orderBy?: TribalIdentityOrderByWithRelationInput | TribalIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TribalIdentities.
     */
    cursor?: TribalIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TribalIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TribalIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TribalIdentities.
     */
    distinct?: TribalIdentityScalarFieldEnum | TribalIdentityScalarFieldEnum[]
  }

  /**
   * TribalIdentity findFirstOrThrow
   */
  export type TribalIdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter, which TribalIdentity to fetch.
     */
    where?: TribalIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TribalIdentities to fetch.
     */
    orderBy?: TribalIdentityOrderByWithRelationInput | TribalIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TribalIdentities.
     */
    cursor?: TribalIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TribalIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TribalIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TribalIdentities.
     */
    distinct?: TribalIdentityScalarFieldEnum | TribalIdentityScalarFieldEnum[]
  }

  /**
   * TribalIdentity findMany
   */
  export type TribalIdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter, which TribalIdentities to fetch.
     */
    where?: TribalIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TribalIdentities to fetch.
     */
    orderBy?: TribalIdentityOrderByWithRelationInput | TribalIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TribalIdentities.
     */
    cursor?: TribalIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TribalIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TribalIdentities.
     */
    skip?: number
    distinct?: TribalIdentityScalarFieldEnum | TribalIdentityScalarFieldEnum[]
  }

  /**
   * TribalIdentity create
   */
  export type TribalIdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a TribalIdentity.
     */
    data: XOR<TribalIdentityCreateInput, TribalIdentityUncheckedCreateInput>
  }

  /**
   * TribalIdentity createMany
   */
  export type TribalIdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TribalIdentities.
     */
    data: TribalIdentityCreateManyInput | TribalIdentityCreateManyInput[]
  }

  /**
   * TribalIdentity createManyAndReturn
   */
  export type TribalIdentityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TribalIdentities.
     */
    data: TribalIdentityCreateManyInput | TribalIdentityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TribalIdentity update
   */
  export type TribalIdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a TribalIdentity.
     */
    data: XOR<TribalIdentityUpdateInput, TribalIdentityUncheckedUpdateInput>
    /**
     * Choose, which TribalIdentity to update.
     */
    where: TribalIdentityWhereUniqueInput
  }

  /**
   * TribalIdentity updateMany
   */
  export type TribalIdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TribalIdentities.
     */
    data: XOR<TribalIdentityUpdateManyMutationInput, TribalIdentityUncheckedUpdateManyInput>
    /**
     * Filter which TribalIdentities to update
     */
    where?: TribalIdentityWhereInput
  }

  /**
   * TribalIdentity upsert
   */
  export type TribalIdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the TribalIdentity to update in case it exists.
     */
    where: TribalIdentityWhereUniqueInput
    /**
     * In case the TribalIdentity found by the `where` argument doesn't exist, create a new TribalIdentity with this data.
     */
    create: XOR<TribalIdentityCreateInput, TribalIdentityUncheckedCreateInput>
    /**
     * In case the TribalIdentity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TribalIdentityUpdateInput, TribalIdentityUncheckedUpdateInput>
  }

  /**
   * TribalIdentity delete
   */
  export type TribalIdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
    /**
     * Filter which TribalIdentity to delete.
     */
    where: TribalIdentityWhereUniqueInput
  }

  /**
   * TribalIdentity deleteMany
   */
  export type TribalIdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TribalIdentities to delete
     */
    where?: TribalIdentityWhereInput
  }

  /**
   * TribalIdentity without action
   */
  export type TribalIdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TribalIdentity
     */
    select?: TribalIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TribalIdentityInclude<ExtArgs> | null
  }


  /**
   * Model UniqueMechanism
   */

  export type AggregateUniqueMechanism = {
    _count: UniqueMechanismCountAggregateOutputType | null
    _min: UniqueMechanismMinAggregateOutputType | null
    _max: UniqueMechanismMaxAggregateOutputType | null
  }

  export type UniqueMechanismMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniqueMechanismMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniqueMechanismCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UniqueMechanismMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniqueMechanismMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniqueMechanismCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UniqueMechanismAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniqueMechanism to aggregate.
     */
    where?: UniqueMechanismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniqueMechanisms to fetch.
     */
    orderBy?: UniqueMechanismOrderByWithRelationInput | UniqueMechanismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniqueMechanismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniqueMechanisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniqueMechanisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniqueMechanisms
    **/
    _count?: true | UniqueMechanismCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniqueMechanismMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniqueMechanismMaxAggregateInputType
  }

  export type GetUniqueMechanismAggregateType<T extends UniqueMechanismAggregateArgs> = {
        [P in keyof T & keyof AggregateUniqueMechanism]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniqueMechanism[P]>
      : GetScalarType<T[P], AggregateUniqueMechanism[P]>
  }




  export type UniqueMechanismGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniqueMechanismWhereInput
    orderBy?: UniqueMechanismOrderByWithAggregationInput | UniqueMechanismOrderByWithAggregationInput[]
    by: UniqueMechanismScalarFieldEnum[] | UniqueMechanismScalarFieldEnum
    having?: UniqueMechanismScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniqueMechanismCountAggregateInputType | true
    _min?: UniqueMechanismMinAggregateInputType
    _max?: UniqueMechanismMaxAggregateInputType
  }

  export type UniqueMechanismGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: UniqueMechanismCountAggregateOutputType | null
    _min: UniqueMechanismMinAggregateOutputType | null
    _max: UniqueMechanismMaxAggregateOutputType | null
  }

  type GetUniqueMechanismGroupByPayload<T extends UniqueMechanismGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniqueMechanismGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniqueMechanismGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniqueMechanismGroupByOutputType[P]>
            : GetScalarType<T[P], UniqueMechanismGroupByOutputType[P]>
        }
      >
    >


  export type UniqueMechanismSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uniqueMechanism"]>

  export type UniqueMechanismSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uniqueMechanism"]>

  export type UniqueMechanismSelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UniqueMechanismInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UniqueMechanismIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UniqueMechanismPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniqueMechanism"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uniqueMechanism"]>
    composites: {}
  }

  type UniqueMechanismGetPayload<S extends boolean | null | undefined | UniqueMechanismDefaultArgs> = $Result.GetResult<Prisma.$UniqueMechanismPayload, S>

  type UniqueMechanismCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UniqueMechanismFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UniqueMechanismCountAggregateInputType | true
    }

  export interface UniqueMechanismDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniqueMechanism'], meta: { name: 'UniqueMechanism' } }
    /**
     * Find zero or one UniqueMechanism that matches the filter.
     * @param {UniqueMechanismFindUniqueArgs} args - Arguments to find a UniqueMechanism
     * @example
     * // Get one UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniqueMechanismFindUniqueArgs>(args: SelectSubset<T, UniqueMechanismFindUniqueArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UniqueMechanism that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UniqueMechanismFindUniqueOrThrowArgs} args - Arguments to find a UniqueMechanism
     * @example
     * // Get one UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniqueMechanismFindUniqueOrThrowArgs>(args: SelectSubset<T, UniqueMechanismFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UniqueMechanism that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismFindFirstArgs} args - Arguments to find a UniqueMechanism
     * @example
     * // Get one UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniqueMechanismFindFirstArgs>(args?: SelectSubset<T, UniqueMechanismFindFirstArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UniqueMechanism that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismFindFirstOrThrowArgs} args - Arguments to find a UniqueMechanism
     * @example
     * // Get one UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniqueMechanismFindFirstOrThrowArgs>(args?: SelectSubset<T, UniqueMechanismFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UniqueMechanisms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniqueMechanisms
     * const uniqueMechanisms = await prisma.uniqueMechanism.findMany()
     * 
     * // Get first 10 UniqueMechanisms
     * const uniqueMechanisms = await prisma.uniqueMechanism.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uniqueMechanismWithIdOnly = await prisma.uniqueMechanism.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniqueMechanismFindManyArgs>(args?: SelectSubset<T, UniqueMechanismFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UniqueMechanism.
     * @param {UniqueMechanismCreateArgs} args - Arguments to create a UniqueMechanism.
     * @example
     * // Create one UniqueMechanism
     * const UniqueMechanism = await prisma.uniqueMechanism.create({
     *   data: {
     *     // ... data to create a UniqueMechanism
     *   }
     * })
     * 
     */
    create<T extends UniqueMechanismCreateArgs>(args: SelectSubset<T, UniqueMechanismCreateArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UniqueMechanisms.
     * @param {UniqueMechanismCreateManyArgs} args - Arguments to create many UniqueMechanisms.
     * @example
     * // Create many UniqueMechanisms
     * const uniqueMechanism = await prisma.uniqueMechanism.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniqueMechanismCreateManyArgs>(args?: SelectSubset<T, UniqueMechanismCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UniqueMechanisms and returns the data saved in the database.
     * @param {UniqueMechanismCreateManyAndReturnArgs} args - Arguments to create many UniqueMechanisms.
     * @example
     * // Create many UniqueMechanisms
     * const uniqueMechanism = await prisma.uniqueMechanism.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UniqueMechanisms and only return the `id`
     * const uniqueMechanismWithIdOnly = await prisma.uniqueMechanism.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniqueMechanismCreateManyAndReturnArgs>(args?: SelectSubset<T, UniqueMechanismCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UniqueMechanism.
     * @param {UniqueMechanismDeleteArgs} args - Arguments to delete one UniqueMechanism.
     * @example
     * // Delete one UniqueMechanism
     * const UniqueMechanism = await prisma.uniqueMechanism.delete({
     *   where: {
     *     // ... filter to delete one UniqueMechanism
     *   }
     * })
     * 
     */
    delete<T extends UniqueMechanismDeleteArgs>(args: SelectSubset<T, UniqueMechanismDeleteArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UniqueMechanism.
     * @param {UniqueMechanismUpdateArgs} args - Arguments to update one UniqueMechanism.
     * @example
     * // Update one UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniqueMechanismUpdateArgs>(args: SelectSubset<T, UniqueMechanismUpdateArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UniqueMechanisms.
     * @param {UniqueMechanismDeleteManyArgs} args - Arguments to filter UniqueMechanisms to delete.
     * @example
     * // Delete a few UniqueMechanisms
     * const { count } = await prisma.uniqueMechanism.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniqueMechanismDeleteManyArgs>(args?: SelectSubset<T, UniqueMechanismDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniqueMechanisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniqueMechanisms
     * const uniqueMechanism = await prisma.uniqueMechanism.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniqueMechanismUpdateManyArgs>(args: SelectSubset<T, UniqueMechanismUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UniqueMechanism.
     * @param {UniqueMechanismUpsertArgs} args - Arguments to update or create a UniqueMechanism.
     * @example
     * // Update or create a UniqueMechanism
     * const uniqueMechanism = await prisma.uniqueMechanism.upsert({
     *   create: {
     *     // ... data to create a UniqueMechanism
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniqueMechanism we want to update
     *   }
     * })
     */
    upsert<T extends UniqueMechanismUpsertArgs>(args: SelectSubset<T, UniqueMechanismUpsertArgs<ExtArgs>>): Prisma__UniqueMechanismClient<$Result.GetResult<Prisma.$UniqueMechanismPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UniqueMechanisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismCountArgs} args - Arguments to filter UniqueMechanisms to count.
     * @example
     * // Count the number of UniqueMechanisms
     * const count = await prisma.uniqueMechanism.count({
     *   where: {
     *     // ... the filter for the UniqueMechanisms we want to count
     *   }
     * })
    **/
    count<T extends UniqueMechanismCountArgs>(
      args?: Subset<T, UniqueMechanismCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniqueMechanismCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniqueMechanism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniqueMechanismAggregateArgs>(args: Subset<T, UniqueMechanismAggregateArgs>): Prisma.PrismaPromise<GetUniqueMechanismAggregateType<T>>

    /**
     * Group by UniqueMechanism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniqueMechanismGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UniqueMechanismGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniqueMechanismGroupByArgs['orderBy'] }
        : { orderBy?: UniqueMechanismGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UniqueMechanismGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniqueMechanismGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniqueMechanism model
   */
  readonly fields: UniqueMechanismFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniqueMechanism.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniqueMechanismClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UniqueMechanism model
   */ 
  interface UniqueMechanismFieldRefs {
    readonly id: FieldRef<"UniqueMechanism", 'String'>
    readonly userId: FieldRef<"UniqueMechanism", 'String'>
    readonly answers: FieldRef<"UniqueMechanism", 'String'>
    readonly generatedReport: FieldRef<"UniqueMechanism", 'String'>
    readonly createdAt: FieldRef<"UniqueMechanism", 'DateTime'>
    readonly updatedAt: FieldRef<"UniqueMechanism", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UniqueMechanism findUnique
   */
  export type UniqueMechanismFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter, which UniqueMechanism to fetch.
     */
    where: UniqueMechanismWhereUniqueInput
  }

  /**
   * UniqueMechanism findUniqueOrThrow
   */
  export type UniqueMechanismFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter, which UniqueMechanism to fetch.
     */
    where: UniqueMechanismWhereUniqueInput
  }

  /**
   * UniqueMechanism findFirst
   */
  export type UniqueMechanismFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter, which UniqueMechanism to fetch.
     */
    where?: UniqueMechanismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniqueMechanisms to fetch.
     */
    orderBy?: UniqueMechanismOrderByWithRelationInput | UniqueMechanismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniqueMechanisms.
     */
    cursor?: UniqueMechanismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniqueMechanisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniqueMechanisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniqueMechanisms.
     */
    distinct?: UniqueMechanismScalarFieldEnum | UniqueMechanismScalarFieldEnum[]
  }

  /**
   * UniqueMechanism findFirstOrThrow
   */
  export type UniqueMechanismFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter, which UniqueMechanism to fetch.
     */
    where?: UniqueMechanismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniqueMechanisms to fetch.
     */
    orderBy?: UniqueMechanismOrderByWithRelationInput | UniqueMechanismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniqueMechanisms.
     */
    cursor?: UniqueMechanismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniqueMechanisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniqueMechanisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniqueMechanisms.
     */
    distinct?: UniqueMechanismScalarFieldEnum | UniqueMechanismScalarFieldEnum[]
  }

  /**
   * UniqueMechanism findMany
   */
  export type UniqueMechanismFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter, which UniqueMechanisms to fetch.
     */
    where?: UniqueMechanismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniqueMechanisms to fetch.
     */
    orderBy?: UniqueMechanismOrderByWithRelationInput | UniqueMechanismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniqueMechanisms.
     */
    cursor?: UniqueMechanismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniqueMechanisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniqueMechanisms.
     */
    skip?: number
    distinct?: UniqueMechanismScalarFieldEnum | UniqueMechanismScalarFieldEnum[]
  }

  /**
   * UniqueMechanism create
   */
  export type UniqueMechanismCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * The data needed to create a UniqueMechanism.
     */
    data: XOR<UniqueMechanismCreateInput, UniqueMechanismUncheckedCreateInput>
  }

  /**
   * UniqueMechanism createMany
   */
  export type UniqueMechanismCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniqueMechanisms.
     */
    data: UniqueMechanismCreateManyInput | UniqueMechanismCreateManyInput[]
  }

  /**
   * UniqueMechanism createManyAndReturn
   */
  export type UniqueMechanismCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UniqueMechanisms.
     */
    data: UniqueMechanismCreateManyInput | UniqueMechanismCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniqueMechanism update
   */
  export type UniqueMechanismUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * The data needed to update a UniqueMechanism.
     */
    data: XOR<UniqueMechanismUpdateInput, UniqueMechanismUncheckedUpdateInput>
    /**
     * Choose, which UniqueMechanism to update.
     */
    where: UniqueMechanismWhereUniqueInput
  }

  /**
   * UniqueMechanism updateMany
   */
  export type UniqueMechanismUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniqueMechanisms.
     */
    data: XOR<UniqueMechanismUpdateManyMutationInput, UniqueMechanismUncheckedUpdateManyInput>
    /**
     * Filter which UniqueMechanisms to update
     */
    where?: UniqueMechanismWhereInput
  }

  /**
   * UniqueMechanism upsert
   */
  export type UniqueMechanismUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * The filter to search for the UniqueMechanism to update in case it exists.
     */
    where: UniqueMechanismWhereUniqueInput
    /**
     * In case the UniqueMechanism found by the `where` argument doesn't exist, create a new UniqueMechanism with this data.
     */
    create: XOR<UniqueMechanismCreateInput, UniqueMechanismUncheckedCreateInput>
    /**
     * In case the UniqueMechanism was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniqueMechanismUpdateInput, UniqueMechanismUncheckedUpdateInput>
  }

  /**
   * UniqueMechanism delete
   */
  export type UniqueMechanismDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
    /**
     * Filter which UniqueMechanism to delete.
     */
    where: UniqueMechanismWhereUniqueInput
  }

  /**
   * UniqueMechanism deleteMany
   */
  export type UniqueMechanismDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniqueMechanisms to delete
     */
    where?: UniqueMechanismWhereInput
  }

  /**
   * UniqueMechanism without action
   */
  export type UniqueMechanismDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniqueMechanism
     */
    select?: UniqueMechanismSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniqueMechanismInclude<ExtArgs> | null
  }


  /**
   * Model USPStatement
   */

  export type AggregateUSPStatement = {
    _count: USPStatementCountAggregateOutputType | null
    _min: USPStatementMinAggregateOutputType | null
    _max: USPStatementMaxAggregateOutputType | null
  }

  export type USPStatementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type USPStatementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type USPStatementCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type USPStatementMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type USPStatementMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type USPStatementCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type USPStatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USPStatement to aggregate.
     */
    where?: USPStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USPStatements to fetch.
     */
    orderBy?: USPStatementOrderByWithRelationInput | USPStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USPStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USPStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USPStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USPStatements
    **/
    _count?: true | USPStatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USPStatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USPStatementMaxAggregateInputType
  }

  export type GetUSPStatementAggregateType<T extends USPStatementAggregateArgs> = {
        [P in keyof T & keyof AggregateUSPStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSPStatement[P]>
      : GetScalarType<T[P], AggregateUSPStatement[P]>
  }




  export type USPStatementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USPStatementWhereInput
    orderBy?: USPStatementOrderByWithAggregationInput | USPStatementOrderByWithAggregationInput[]
    by: USPStatementScalarFieldEnum[] | USPStatementScalarFieldEnum
    having?: USPStatementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USPStatementCountAggregateInputType | true
    _min?: USPStatementMinAggregateInputType
    _max?: USPStatementMaxAggregateInputType
  }

  export type USPStatementGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: USPStatementCountAggregateOutputType | null
    _min: USPStatementMinAggregateOutputType | null
    _max: USPStatementMaxAggregateOutputType | null
  }

  type GetUSPStatementGroupByPayload<T extends USPStatementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USPStatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USPStatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USPStatementGroupByOutputType[P]>
            : GetScalarType<T[P], USPStatementGroupByOutputType[P]>
        }
      >
    >


  export type USPStatementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSPStatement"]>

  export type USPStatementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSPStatement"]>

  export type USPStatementSelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type USPStatementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type USPStatementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $USPStatementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USPStatement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uSPStatement"]>
    composites: {}
  }

  type USPStatementGetPayload<S extends boolean | null | undefined | USPStatementDefaultArgs> = $Result.GetResult<Prisma.$USPStatementPayload, S>

  type USPStatementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<USPStatementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: USPStatementCountAggregateInputType | true
    }

  export interface USPStatementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USPStatement'], meta: { name: 'USPStatement' } }
    /**
     * Find zero or one USPStatement that matches the filter.
     * @param {USPStatementFindUniqueArgs} args - Arguments to find a USPStatement
     * @example
     * // Get one USPStatement
     * const uSPStatement = await prisma.uSPStatement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USPStatementFindUniqueArgs>(args: SelectSubset<T, USPStatementFindUniqueArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one USPStatement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {USPStatementFindUniqueOrThrowArgs} args - Arguments to find a USPStatement
     * @example
     * // Get one USPStatement
     * const uSPStatement = await prisma.uSPStatement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USPStatementFindUniqueOrThrowArgs>(args: SelectSubset<T, USPStatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first USPStatement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementFindFirstArgs} args - Arguments to find a USPStatement
     * @example
     * // Get one USPStatement
     * const uSPStatement = await prisma.uSPStatement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USPStatementFindFirstArgs>(args?: SelectSubset<T, USPStatementFindFirstArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first USPStatement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementFindFirstOrThrowArgs} args - Arguments to find a USPStatement
     * @example
     * // Get one USPStatement
     * const uSPStatement = await prisma.uSPStatement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USPStatementFindFirstOrThrowArgs>(args?: SelectSubset<T, USPStatementFindFirstOrThrowArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more USPStatements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USPStatements
     * const uSPStatements = await prisma.uSPStatement.findMany()
     * 
     * // Get first 10 USPStatements
     * const uSPStatements = await prisma.uSPStatement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSPStatementWithIdOnly = await prisma.uSPStatement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends USPStatementFindManyArgs>(args?: SelectSubset<T, USPStatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a USPStatement.
     * @param {USPStatementCreateArgs} args - Arguments to create a USPStatement.
     * @example
     * // Create one USPStatement
     * const USPStatement = await prisma.uSPStatement.create({
     *   data: {
     *     // ... data to create a USPStatement
     *   }
     * })
     * 
     */
    create<T extends USPStatementCreateArgs>(args: SelectSubset<T, USPStatementCreateArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many USPStatements.
     * @param {USPStatementCreateManyArgs} args - Arguments to create many USPStatements.
     * @example
     * // Create many USPStatements
     * const uSPStatement = await prisma.uSPStatement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USPStatementCreateManyArgs>(args?: SelectSubset<T, USPStatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many USPStatements and returns the data saved in the database.
     * @param {USPStatementCreateManyAndReturnArgs} args - Arguments to create many USPStatements.
     * @example
     * // Create many USPStatements
     * const uSPStatement = await prisma.uSPStatement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many USPStatements and only return the `id`
     * const uSPStatementWithIdOnly = await prisma.uSPStatement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends USPStatementCreateManyAndReturnArgs>(args?: SelectSubset<T, USPStatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a USPStatement.
     * @param {USPStatementDeleteArgs} args - Arguments to delete one USPStatement.
     * @example
     * // Delete one USPStatement
     * const USPStatement = await prisma.uSPStatement.delete({
     *   where: {
     *     // ... filter to delete one USPStatement
     *   }
     * })
     * 
     */
    delete<T extends USPStatementDeleteArgs>(args: SelectSubset<T, USPStatementDeleteArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one USPStatement.
     * @param {USPStatementUpdateArgs} args - Arguments to update one USPStatement.
     * @example
     * // Update one USPStatement
     * const uSPStatement = await prisma.uSPStatement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USPStatementUpdateArgs>(args: SelectSubset<T, USPStatementUpdateArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more USPStatements.
     * @param {USPStatementDeleteManyArgs} args - Arguments to filter USPStatements to delete.
     * @example
     * // Delete a few USPStatements
     * const { count } = await prisma.uSPStatement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USPStatementDeleteManyArgs>(args?: SelectSubset<T, USPStatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USPStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USPStatements
     * const uSPStatement = await prisma.uSPStatement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USPStatementUpdateManyArgs>(args: SelectSubset<T, USPStatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USPStatement.
     * @param {USPStatementUpsertArgs} args - Arguments to update or create a USPStatement.
     * @example
     * // Update or create a USPStatement
     * const uSPStatement = await prisma.uSPStatement.upsert({
     *   create: {
     *     // ... data to create a USPStatement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USPStatement we want to update
     *   }
     * })
     */
    upsert<T extends USPStatementUpsertArgs>(args: SelectSubset<T, USPStatementUpsertArgs<ExtArgs>>): Prisma__USPStatementClient<$Result.GetResult<Prisma.$USPStatementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of USPStatements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementCountArgs} args - Arguments to filter USPStatements to count.
     * @example
     * // Count the number of USPStatements
     * const count = await prisma.uSPStatement.count({
     *   where: {
     *     // ... the filter for the USPStatements we want to count
     *   }
     * })
    **/
    count<T extends USPStatementCountArgs>(
      args?: Subset<T, USPStatementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USPStatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USPStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USPStatementAggregateArgs>(args: Subset<T, USPStatementAggregateArgs>): Prisma.PrismaPromise<GetUSPStatementAggregateType<T>>

    /**
     * Group by USPStatement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USPStatementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USPStatementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USPStatementGroupByArgs['orderBy'] }
        : { orderBy?: USPStatementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USPStatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSPStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USPStatement model
   */
  readonly fields: USPStatementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USPStatement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USPStatementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the USPStatement model
   */ 
  interface USPStatementFieldRefs {
    readonly id: FieldRef<"USPStatement", 'String'>
    readonly userId: FieldRef<"USPStatement", 'String'>
    readonly answers: FieldRef<"USPStatement", 'String'>
    readonly generatedReport: FieldRef<"USPStatement", 'String'>
    readonly createdAt: FieldRef<"USPStatement", 'DateTime'>
    readonly updatedAt: FieldRef<"USPStatement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * USPStatement findUnique
   */
  export type USPStatementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter, which USPStatement to fetch.
     */
    where: USPStatementWhereUniqueInput
  }

  /**
   * USPStatement findUniqueOrThrow
   */
  export type USPStatementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter, which USPStatement to fetch.
     */
    where: USPStatementWhereUniqueInput
  }

  /**
   * USPStatement findFirst
   */
  export type USPStatementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter, which USPStatement to fetch.
     */
    where?: USPStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USPStatements to fetch.
     */
    orderBy?: USPStatementOrderByWithRelationInput | USPStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USPStatements.
     */
    cursor?: USPStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USPStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USPStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USPStatements.
     */
    distinct?: USPStatementScalarFieldEnum | USPStatementScalarFieldEnum[]
  }

  /**
   * USPStatement findFirstOrThrow
   */
  export type USPStatementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter, which USPStatement to fetch.
     */
    where?: USPStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USPStatements to fetch.
     */
    orderBy?: USPStatementOrderByWithRelationInput | USPStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USPStatements.
     */
    cursor?: USPStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USPStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USPStatements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USPStatements.
     */
    distinct?: USPStatementScalarFieldEnum | USPStatementScalarFieldEnum[]
  }

  /**
   * USPStatement findMany
   */
  export type USPStatementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter, which USPStatements to fetch.
     */
    where?: USPStatementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USPStatements to fetch.
     */
    orderBy?: USPStatementOrderByWithRelationInput | USPStatementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USPStatements.
     */
    cursor?: USPStatementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USPStatements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USPStatements.
     */
    skip?: number
    distinct?: USPStatementScalarFieldEnum | USPStatementScalarFieldEnum[]
  }

  /**
   * USPStatement create
   */
  export type USPStatementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * The data needed to create a USPStatement.
     */
    data: XOR<USPStatementCreateInput, USPStatementUncheckedCreateInput>
  }

  /**
   * USPStatement createMany
   */
  export type USPStatementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USPStatements.
     */
    data: USPStatementCreateManyInput | USPStatementCreateManyInput[]
  }

  /**
   * USPStatement createManyAndReturn
   */
  export type USPStatementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many USPStatements.
     */
    data: USPStatementCreateManyInput | USPStatementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * USPStatement update
   */
  export type USPStatementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * The data needed to update a USPStatement.
     */
    data: XOR<USPStatementUpdateInput, USPStatementUncheckedUpdateInput>
    /**
     * Choose, which USPStatement to update.
     */
    where: USPStatementWhereUniqueInput
  }

  /**
   * USPStatement updateMany
   */
  export type USPStatementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USPStatements.
     */
    data: XOR<USPStatementUpdateManyMutationInput, USPStatementUncheckedUpdateManyInput>
    /**
     * Filter which USPStatements to update
     */
    where?: USPStatementWhereInput
  }

  /**
   * USPStatement upsert
   */
  export type USPStatementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * The filter to search for the USPStatement to update in case it exists.
     */
    where: USPStatementWhereUniqueInput
    /**
     * In case the USPStatement found by the `where` argument doesn't exist, create a new USPStatement with this data.
     */
    create: XOR<USPStatementCreateInput, USPStatementUncheckedCreateInput>
    /**
     * In case the USPStatement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USPStatementUpdateInput, USPStatementUncheckedUpdateInput>
  }

  /**
   * USPStatement delete
   */
  export type USPStatementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
    /**
     * Filter which USPStatement to delete.
     */
    where: USPStatementWhereUniqueInput
  }

  /**
   * USPStatement deleteMany
   */
  export type USPStatementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USPStatements to delete
     */
    where?: USPStatementWhereInput
  }

  /**
   * USPStatement without action
   */
  export type USPStatementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USPStatement
     */
    select?: USPStatementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USPStatementInclude<ExtArgs> | null
  }


  /**
   * Model MessagingSummary
   */

  export type AggregateMessagingSummary = {
    _count: MessagingSummaryCountAggregateOutputType | null
    _min: MessagingSummaryMinAggregateOutputType | null
    _max: MessagingSummaryMaxAggregateOutputType | null
  }

  export type MessagingSummaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagingSummaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    answers: string | null
    generatedReport: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagingSummaryCountAggregateOutputType = {
    id: number
    userId: number
    answers: number
    generatedReport: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessagingSummaryMinAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagingSummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagingSummaryCountAggregateInputType = {
    id?: true
    userId?: true
    answers?: true
    generatedReport?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessagingSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessagingSummary to aggregate.
     */
    where?: MessagingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessagingSummaries to fetch.
     */
    orderBy?: MessagingSummaryOrderByWithRelationInput | MessagingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessagingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessagingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessagingSummaries
    **/
    _count?: true | MessagingSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagingSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagingSummaryMaxAggregateInputType
  }

  export type GetMessagingSummaryAggregateType<T extends MessagingSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMessagingSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessagingSummary[P]>
      : GetScalarType<T[P], AggregateMessagingSummary[P]>
  }




  export type MessagingSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagingSummaryWhereInput
    orderBy?: MessagingSummaryOrderByWithAggregationInput | MessagingSummaryOrderByWithAggregationInput[]
    by: MessagingSummaryScalarFieldEnum[] | MessagingSummaryScalarFieldEnum
    having?: MessagingSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagingSummaryCountAggregateInputType | true
    _min?: MessagingSummaryMinAggregateInputType
    _max?: MessagingSummaryMaxAggregateInputType
  }

  export type MessagingSummaryGroupByOutputType = {
    id: string
    userId: string
    answers: string
    generatedReport: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessagingSummaryCountAggregateOutputType | null
    _min: MessagingSummaryMinAggregateOutputType | null
    _max: MessagingSummaryMaxAggregateOutputType | null
  }

  type GetMessagingSummaryGroupByPayload<T extends MessagingSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagingSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagingSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagingSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], MessagingSummaryGroupByOutputType[P]>
        }
      >
    >


  export type MessagingSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messagingSummary"]>

  export type MessagingSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messagingSummary"]>

  export type MessagingSummarySelectScalar = {
    id?: boolean
    userId?: boolean
    answers?: boolean
    generatedReport?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessagingSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessagingSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagingSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessagingSummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      answers: string
      generatedReport: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messagingSummary"]>
    composites: {}
  }

  type MessagingSummaryGetPayload<S extends boolean | null | undefined | MessagingSummaryDefaultArgs> = $Result.GetResult<Prisma.$MessagingSummaryPayload, S>

  type MessagingSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessagingSummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessagingSummaryCountAggregateInputType | true
    }

  export interface MessagingSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessagingSummary'], meta: { name: 'MessagingSummary' } }
    /**
     * Find zero or one MessagingSummary that matches the filter.
     * @param {MessagingSummaryFindUniqueArgs} args - Arguments to find a MessagingSummary
     * @example
     * // Get one MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagingSummaryFindUniqueArgs>(args: SelectSubset<T, MessagingSummaryFindUniqueArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MessagingSummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessagingSummaryFindUniqueOrThrowArgs} args - Arguments to find a MessagingSummary
     * @example
     * // Get one MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagingSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagingSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MessagingSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryFindFirstArgs} args - Arguments to find a MessagingSummary
     * @example
     * // Get one MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagingSummaryFindFirstArgs>(args?: SelectSubset<T, MessagingSummaryFindFirstArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MessagingSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryFindFirstOrThrowArgs} args - Arguments to find a MessagingSummary
     * @example
     * // Get one MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagingSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagingSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MessagingSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessagingSummaries
     * const messagingSummaries = await prisma.messagingSummary.findMany()
     * 
     * // Get first 10 MessagingSummaries
     * const messagingSummaries = await prisma.messagingSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagingSummaryWithIdOnly = await prisma.messagingSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagingSummaryFindManyArgs>(args?: SelectSubset<T, MessagingSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MessagingSummary.
     * @param {MessagingSummaryCreateArgs} args - Arguments to create a MessagingSummary.
     * @example
     * // Create one MessagingSummary
     * const MessagingSummary = await prisma.messagingSummary.create({
     *   data: {
     *     // ... data to create a MessagingSummary
     *   }
     * })
     * 
     */
    create<T extends MessagingSummaryCreateArgs>(args: SelectSubset<T, MessagingSummaryCreateArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MessagingSummaries.
     * @param {MessagingSummaryCreateManyArgs} args - Arguments to create many MessagingSummaries.
     * @example
     * // Create many MessagingSummaries
     * const messagingSummary = await prisma.messagingSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagingSummaryCreateManyArgs>(args?: SelectSubset<T, MessagingSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessagingSummaries and returns the data saved in the database.
     * @param {MessagingSummaryCreateManyAndReturnArgs} args - Arguments to create many MessagingSummaries.
     * @example
     * // Create many MessagingSummaries
     * const messagingSummary = await prisma.messagingSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessagingSummaries and only return the `id`
     * const messagingSummaryWithIdOnly = await prisma.messagingSummary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagingSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagingSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MessagingSummary.
     * @param {MessagingSummaryDeleteArgs} args - Arguments to delete one MessagingSummary.
     * @example
     * // Delete one MessagingSummary
     * const MessagingSummary = await prisma.messagingSummary.delete({
     *   where: {
     *     // ... filter to delete one MessagingSummary
     *   }
     * })
     * 
     */
    delete<T extends MessagingSummaryDeleteArgs>(args: SelectSubset<T, MessagingSummaryDeleteArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MessagingSummary.
     * @param {MessagingSummaryUpdateArgs} args - Arguments to update one MessagingSummary.
     * @example
     * // Update one MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagingSummaryUpdateArgs>(args: SelectSubset<T, MessagingSummaryUpdateArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MessagingSummaries.
     * @param {MessagingSummaryDeleteManyArgs} args - Arguments to filter MessagingSummaries to delete.
     * @example
     * // Delete a few MessagingSummaries
     * const { count } = await prisma.messagingSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagingSummaryDeleteManyArgs>(args?: SelectSubset<T, MessagingSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessagingSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessagingSummaries
     * const messagingSummary = await prisma.messagingSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagingSummaryUpdateManyArgs>(args: SelectSubset<T, MessagingSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessagingSummary.
     * @param {MessagingSummaryUpsertArgs} args - Arguments to update or create a MessagingSummary.
     * @example
     * // Update or create a MessagingSummary
     * const messagingSummary = await prisma.messagingSummary.upsert({
     *   create: {
     *     // ... data to create a MessagingSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessagingSummary we want to update
     *   }
     * })
     */
    upsert<T extends MessagingSummaryUpsertArgs>(args: SelectSubset<T, MessagingSummaryUpsertArgs<ExtArgs>>): Prisma__MessagingSummaryClient<$Result.GetResult<Prisma.$MessagingSummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MessagingSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryCountArgs} args - Arguments to filter MessagingSummaries to count.
     * @example
     * // Count the number of MessagingSummaries
     * const count = await prisma.messagingSummary.count({
     *   where: {
     *     // ... the filter for the MessagingSummaries we want to count
     *   }
     * })
    **/
    count<T extends MessagingSummaryCountArgs>(
      args?: Subset<T, MessagingSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagingSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessagingSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagingSummaryAggregateArgs>(args: Subset<T, MessagingSummaryAggregateArgs>): Prisma.PrismaPromise<GetMessagingSummaryAggregateType<T>>

    /**
     * Group by MessagingSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagingSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagingSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagingSummaryGroupByArgs['orderBy'] }
        : { orderBy?: MessagingSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagingSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagingSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessagingSummary model
   */
  readonly fields: MessagingSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessagingSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagingSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessagingSummary model
   */ 
  interface MessagingSummaryFieldRefs {
    readonly id: FieldRef<"MessagingSummary", 'String'>
    readonly userId: FieldRef<"MessagingSummary", 'String'>
    readonly answers: FieldRef<"MessagingSummary", 'String'>
    readonly generatedReport: FieldRef<"MessagingSummary", 'String'>
    readonly createdAt: FieldRef<"MessagingSummary", 'DateTime'>
    readonly updatedAt: FieldRef<"MessagingSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessagingSummary findUnique
   */
  export type MessagingSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MessagingSummary to fetch.
     */
    where: MessagingSummaryWhereUniqueInput
  }

  /**
   * MessagingSummary findUniqueOrThrow
   */
  export type MessagingSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MessagingSummary to fetch.
     */
    where: MessagingSummaryWhereUniqueInput
  }

  /**
   * MessagingSummary findFirst
   */
  export type MessagingSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MessagingSummary to fetch.
     */
    where?: MessagingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessagingSummaries to fetch.
     */
    orderBy?: MessagingSummaryOrderByWithRelationInput | MessagingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessagingSummaries.
     */
    cursor?: MessagingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessagingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessagingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessagingSummaries.
     */
    distinct?: MessagingSummaryScalarFieldEnum | MessagingSummaryScalarFieldEnum[]
  }

  /**
   * MessagingSummary findFirstOrThrow
   */
  export type MessagingSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MessagingSummary to fetch.
     */
    where?: MessagingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessagingSummaries to fetch.
     */
    orderBy?: MessagingSummaryOrderByWithRelationInput | MessagingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessagingSummaries.
     */
    cursor?: MessagingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessagingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessagingSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessagingSummaries.
     */
    distinct?: MessagingSummaryScalarFieldEnum | MessagingSummaryScalarFieldEnum[]
  }

  /**
   * MessagingSummary findMany
   */
  export type MessagingSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter, which MessagingSummaries to fetch.
     */
    where?: MessagingSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessagingSummaries to fetch.
     */
    orderBy?: MessagingSummaryOrderByWithRelationInput | MessagingSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessagingSummaries.
     */
    cursor?: MessagingSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessagingSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessagingSummaries.
     */
    skip?: number
    distinct?: MessagingSummaryScalarFieldEnum | MessagingSummaryScalarFieldEnum[]
  }

  /**
   * MessagingSummary create
   */
  export type MessagingSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a MessagingSummary.
     */
    data: XOR<MessagingSummaryCreateInput, MessagingSummaryUncheckedCreateInput>
  }

  /**
   * MessagingSummary createMany
   */
  export type MessagingSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessagingSummaries.
     */
    data: MessagingSummaryCreateManyInput | MessagingSummaryCreateManyInput[]
  }

  /**
   * MessagingSummary createManyAndReturn
   */
  export type MessagingSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MessagingSummaries.
     */
    data: MessagingSummaryCreateManyInput | MessagingSummaryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessagingSummary update
   */
  export type MessagingSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a MessagingSummary.
     */
    data: XOR<MessagingSummaryUpdateInput, MessagingSummaryUncheckedUpdateInput>
    /**
     * Choose, which MessagingSummary to update.
     */
    where: MessagingSummaryWhereUniqueInput
  }

  /**
   * MessagingSummary updateMany
   */
  export type MessagingSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessagingSummaries.
     */
    data: XOR<MessagingSummaryUpdateManyMutationInput, MessagingSummaryUncheckedUpdateManyInput>
    /**
     * Filter which MessagingSummaries to update
     */
    where?: MessagingSummaryWhereInput
  }

  /**
   * MessagingSummary upsert
   */
  export type MessagingSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the MessagingSummary to update in case it exists.
     */
    where: MessagingSummaryWhereUniqueInput
    /**
     * In case the MessagingSummary found by the `where` argument doesn't exist, create a new MessagingSummary with this data.
     */
    create: XOR<MessagingSummaryCreateInput, MessagingSummaryUncheckedCreateInput>
    /**
     * In case the MessagingSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagingSummaryUpdateInput, MessagingSummaryUncheckedUpdateInput>
  }

  /**
   * MessagingSummary delete
   */
  export type MessagingSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
    /**
     * Filter which MessagingSummary to delete.
     */
    where: MessagingSummaryWhereUniqueInput
  }

  /**
   * MessagingSummary deleteMany
   */
  export type MessagingSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessagingSummaries to delete
     */
    where?: MessagingSummaryWhereInput
  }

  /**
   * MessagingSummary without action
   */
  export type MessagingSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagingSummary
     */
    select?: MessagingSummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagingSummaryInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedCourse
   */

  export type AggregateGeneratedCourse = {
    _count: GeneratedCourseCountAggregateOutputType | null
    _avg: GeneratedCourseAvgAggregateOutputType | null
    _sum: GeneratedCourseSumAggregateOutputType | null
    _min: GeneratedCourseMinAggregateOutputType | null
    _max: GeneratedCourseMaxAggregateOutputType | null
  }

  export type GeneratedCourseAvgAggregateOutputType = {
    moduleCount: number | null
  }

  export type GeneratedCourseSumAggregateOutputType = {
    moduleCount: number | null
  }

  export type GeneratedCourseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    pricingTier: string | null
    tone: string | null
    moduleCount: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GeneratedCourseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    pricingTier: string | null
    tone: string | null
    moduleCount: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GeneratedCourseCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    pricingTier: number
    tone: number
    moduleCount: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GeneratedCourseAvgAggregateInputType = {
    moduleCount?: true
  }

  export type GeneratedCourseSumAggregateInputType = {
    moduleCount?: true
  }

  export type GeneratedCourseMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    pricingTier?: true
    tone?: true
    moduleCount?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GeneratedCourseMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    pricingTier?: true
    tone?: true
    moduleCount?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GeneratedCourseCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    pricingTier?: true
    tone?: true
    moduleCount?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GeneratedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedCourse to aggregate.
     */
    where?: GeneratedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedCourses to fetch.
     */
    orderBy?: GeneratedCourseOrderByWithRelationInput | GeneratedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedCourses
    **/
    _count?: true | GeneratedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedCourseMaxAggregateInputType
  }

  export type GetGeneratedCourseAggregateType<T extends GeneratedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedCourse[P]>
      : GetScalarType<T[P], AggregateGeneratedCourse[P]>
  }




  export type GeneratedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedCourseWhereInput
    orderBy?: GeneratedCourseOrderByWithAggregationInput | GeneratedCourseOrderByWithAggregationInput[]
    by: GeneratedCourseScalarFieldEnum[] | GeneratedCourseScalarFieldEnum
    having?: GeneratedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedCourseCountAggregateInputType | true
    _avg?: GeneratedCourseAvgAggregateInputType
    _sum?: GeneratedCourseSumAggregateInputType
    _min?: GeneratedCourseMinAggregateInputType
    _max?: GeneratedCourseMaxAggregateInputType
  }

  export type GeneratedCourseGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: GeneratedCourseCountAggregateOutputType | null
    _avg: GeneratedCourseAvgAggregateOutputType | null
    _sum: GeneratedCourseSumAggregateOutputType | null
    _min: GeneratedCourseMinAggregateOutputType | null
    _max: GeneratedCourseMaxAggregateOutputType | null
  }

  type GetGeneratedCourseGroupByPayload<T extends GeneratedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedCourseGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    pricingTier?: boolean
    tone?: boolean
    moduleCount?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedCourse"]>

  export type GeneratedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    pricingTier?: boolean
    tone?: boolean
    moduleCount?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedCourse"]>

  export type GeneratedCourseSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    pricingTier?: boolean
    tone?: boolean
    moduleCount?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GeneratedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GeneratedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GeneratedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      pricingTier: string
      tone: string
      moduleCount: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["generatedCourse"]>
    composites: {}
  }

  type GeneratedCourseGetPayload<S extends boolean | null | undefined | GeneratedCourseDefaultArgs> = $Result.GetResult<Prisma.$GeneratedCoursePayload, S>

  type GeneratedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GeneratedCourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GeneratedCourseCountAggregateInputType | true
    }

  export interface GeneratedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedCourse'], meta: { name: 'GeneratedCourse' } }
    /**
     * Find zero or one GeneratedCourse that matches the filter.
     * @param {GeneratedCourseFindUniqueArgs} args - Arguments to find a GeneratedCourse
     * @example
     * // Get one GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedCourseFindUniqueArgs>(args: SelectSubset<T, GeneratedCourseFindUniqueArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GeneratedCourse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GeneratedCourseFindUniqueOrThrowArgs} args - Arguments to find a GeneratedCourse
     * @example
     * // Get one GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GeneratedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseFindFirstArgs} args - Arguments to find a GeneratedCourse
     * @example
     * // Get one GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedCourseFindFirstArgs>(args?: SelectSubset<T, GeneratedCourseFindFirstArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GeneratedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseFindFirstOrThrowArgs} args - Arguments to find a GeneratedCourse
     * @example
     * // Get one GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GeneratedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedCourses
     * const generatedCourses = await prisma.generatedCourse.findMany()
     * 
     * // Get first 10 GeneratedCourses
     * const generatedCourses = await prisma.generatedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedCourseWithIdOnly = await prisma.generatedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedCourseFindManyArgs>(args?: SelectSubset<T, GeneratedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GeneratedCourse.
     * @param {GeneratedCourseCreateArgs} args - Arguments to create a GeneratedCourse.
     * @example
     * // Create one GeneratedCourse
     * const GeneratedCourse = await prisma.generatedCourse.create({
     *   data: {
     *     // ... data to create a GeneratedCourse
     *   }
     * })
     * 
     */
    create<T extends GeneratedCourseCreateArgs>(args: SelectSubset<T, GeneratedCourseCreateArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GeneratedCourses.
     * @param {GeneratedCourseCreateManyArgs} args - Arguments to create many GeneratedCourses.
     * @example
     * // Create many GeneratedCourses
     * const generatedCourse = await prisma.generatedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedCourseCreateManyArgs>(args?: SelectSubset<T, GeneratedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedCourses and returns the data saved in the database.
     * @param {GeneratedCourseCreateManyAndReturnArgs} args - Arguments to create many GeneratedCourses.
     * @example
     * // Create many GeneratedCourses
     * const generatedCourse = await prisma.generatedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedCourses and only return the `id`
     * const generatedCourseWithIdOnly = await prisma.generatedCourse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GeneratedCourse.
     * @param {GeneratedCourseDeleteArgs} args - Arguments to delete one GeneratedCourse.
     * @example
     * // Delete one GeneratedCourse
     * const GeneratedCourse = await prisma.generatedCourse.delete({
     *   where: {
     *     // ... filter to delete one GeneratedCourse
     *   }
     * })
     * 
     */
    delete<T extends GeneratedCourseDeleteArgs>(args: SelectSubset<T, GeneratedCourseDeleteArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GeneratedCourse.
     * @param {GeneratedCourseUpdateArgs} args - Arguments to update one GeneratedCourse.
     * @example
     * // Update one GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedCourseUpdateArgs>(args: SelectSubset<T, GeneratedCourseUpdateArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GeneratedCourses.
     * @param {GeneratedCourseDeleteManyArgs} args - Arguments to filter GeneratedCourses to delete.
     * @example
     * // Delete a few GeneratedCourses
     * const { count } = await prisma.generatedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedCourseDeleteManyArgs>(args?: SelectSubset<T, GeneratedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedCourses
     * const generatedCourse = await prisma.generatedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedCourseUpdateManyArgs>(args: SelectSubset<T, GeneratedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneratedCourse.
     * @param {GeneratedCourseUpsertArgs} args - Arguments to update or create a GeneratedCourse.
     * @example
     * // Update or create a GeneratedCourse
     * const generatedCourse = await prisma.generatedCourse.upsert({
     *   create: {
     *     // ... data to create a GeneratedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedCourse we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedCourseUpsertArgs>(args: SelectSubset<T, GeneratedCourseUpsertArgs<ExtArgs>>): Prisma__GeneratedCourseClient<$Result.GetResult<Prisma.$GeneratedCoursePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GeneratedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseCountArgs} args - Arguments to filter GeneratedCourses to count.
     * @example
     * // Count the number of GeneratedCourses
     * const count = await prisma.generatedCourse.count({
     *   where: {
     *     // ... the filter for the GeneratedCourses we want to count
     *   }
     * })
    **/
    count<T extends GeneratedCourseCountArgs>(
      args?: Subset<T, GeneratedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratedCourseAggregateArgs>(args: Subset<T, GeneratedCourseAggregateArgs>): Prisma.PrismaPromise<GetGeneratedCourseAggregateType<T>>

    /**
     * Group by GeneratedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedCourseGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedCourse model
   */
  readonly fields: GeneratedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneratedCourse model
   */ 
  interface GeneratedCourseFieldRefs {
    readonly id: FieldRef<"GeneratedCourse", 'String'>
    readonly userId: FieldRef<"GeneratedCourse", 'String'>
    readonly title: FieldRef<"GeneratedCourse", 'String'>
    readonly description: FieldRef<"GeneratedCourse", 'String'>
    readonly pricingTier: FieldRef<"GeneratedCourse", 'String'>
    readonly tone: FieldRef<"GeneratedCourse", 'String'>
    readonly moduleCount: FieldRef<"GeneratedCourse", 'Int'>
    readonly content: FieldRef<"GeneratedCourse", 'String'>
    readonly createdAt: FieldRef<"GeneratedCourse", 'DateTime'>
    readonly updatedAt: FieldRef<"GeneratedCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedCourse findUnique
   */
  export type GeneratedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedCourse to fetch.
     */
    where: GeneratedCourseWhereUniqueInput
  }

  /**
   * GeneratedCourse findUniqueOrThrow
   */
  export type GeneratedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedCourse to fetch.
     */
    where: GeneratedCourseWhereUniqueInput
  }

  /**
   * GeneratedCourse findFirst
   */
  export type GeneratedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedCourse to fetch.
     */
    where?: GeneratedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedCourses to fetch.
     */
    orderBy?: GeneratedCourseOrderByWithRelationInput | GeneratedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedCourses.
     */
    cursor?: GeneratedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedCourses.
     */
    distinct?: GeneratedCourseScalarFieldEnum | GeneratedCourseScalarFieldEnum[]
  }

  /**
   * GeneratedCourse findFirstOrThrow
   */
  export type GeneratedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedCourse to fetch.
     */
    where?: GeneratedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedCourses to fetch.
     */
    orderBy?: GeneratedCourseOrderByWithRelationInput | GeneratedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedCourses.
     */
    cursor?: GeneratedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedCourses.
     */
    distinct?: GeneratedCourseScalarFieldEnum | GeneratedCourseScalarFieldEnum[]
  }

  /**
   * GeneratedCourse findMany
   */
  export type GeneratedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedCourses to fetch.
     */
    where?: GeneratedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedCourses to fetch.
     */
    orderBy?: GeneratedCourseOrderByWithRelationInput | GeneratedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedCourses.
     */
    cursor?: GeneratedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedCourses.
     */
    skip?: number
    distinct?: GeneratedCourseScalarFieldEnum | GeneratedCourseScalarFieldEnum[]
  }

  /**
   * GeneratedCourse create
   */
  export type GeneratedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedCourse.
     */
    data: XOR<GeneratedCourseCreateInput, GeneratedCourseUncheckedCreateInput>
  }

  /**
   * GeneratedCourse createMany
   */
  export type GeneratedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedCourses.
     */
    data: GeneratedCourseCreateManyInput | GeneratedCourseCreateManyInput[]
  }

  /**
   * GeneratedCourse createManyAndReturn
   */
  export type GeneratedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GeneratedCourses.
     */
    data: GeneratedCourseCreateManyInput | GeneratedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedCourse update
   */
  export type GeneratedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedCourse.
     */
    data: XOR<GeneratedCourseUpdateInput, GeneratedCourseUncheckedUpdateInput>
    /**
     * Choose, which GeneratedCourse to update.
     */
    where: GeneratedCourseWhereUniqueInput
  }

  /**
   * GeneratedCourse updateMany
   */
  export type GeneratedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedCourses.
     */
    data: XOR<GeneratedCourseUpdateManyMutationInput, GeneratedCourseUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedCourses to update
     */
    where?: GeneratedCourseWhereInput
  }

  /**
   * GeneratedCourse upsert
   */
  export type GeneratedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedCourse to update in case it exists.
     */
    where: GeneratedCourseWhereUniqueInput
    /**
     * In case the GeneratedCourse found by the `where` argument doesn't exist, create a new GeneratedCourse with this data.
     */
    create: XOR<GeneratedCourseCreateInput, GeneratedCourseUncheckedCreateInput>
    /**
     * In case the GeneratedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedCourseUpdateInput, GeneratedCourseUncheckedUpdateInput>
  }

  /**
   * GeneratedCourse delete
   */
  export type GeneratedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
    /**
     * Filter which GeneratedCourse to delete.
     */
    where: GeneratedCourseWhereUniqueInput
  }

  /**
   * GeneratedCourse deleteMany
   */
  export type GeneratedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedCourses to delete
     */
    where?: GeneratedCourseWhereInput
  }

  /**
   * GeneratedCourse without action
   */
  export type GeneratedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedCourse
     */
    select?: GeneratedCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedCourseInclude<ExtArgs> | null
  }


  /**
   * Model BrandBoard
   */

  export type AggregateBrandBoard = {
    _count: BrandBoardCountAggregateOutputType | null
    _min: BrandBoardMinAggregateOutputType | null
    _max: BrandBoardMaxAggregateOutputType | null
  }

  export type BrandBoardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    feel: string | null
    persona: string | null
    demographics: string | null
    colors: string | null
    typography: string | null
    visualContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandBoardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    feel: string | null
    persona: string | null
    demographics: string | null
    colors: string | null
    typography: string | null
    visualContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandBoardCountAggregateOutputType = {
    id: number
    userId: number
    feel: number
    persona: number
    demographics: number
    colors: number
    typography: number
    visualContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandBoardMinAggregateInputType = {
    id?: true
    userId?: true
    feel?: true
    persona?: true
    demographics?: true
    colors?: true
    typography?: true
    visualContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandBoardMaxAggregateInputType = {
    id?: true
    userId?: true
    feel?: true
    persona?: true
    demographics?: true
    colors?: true
    typography?: true
    visualContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandBoardCountAggregateInputType = {
    id?: true
    userId?: true
    feel?: true
    persona?: true
    demographics?: true
    colors?: true
    typography?: true
    visualContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandBoard to aggregate.
     */
    where?: BrandBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandBoards to fetch.
     */
    orderBy?: BrandBoardOrderByWithRelationInput | BrandBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandBoards
    **/
    _count?: true | BrandBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandBoardMaxAggregateInputType
  }

  export type GetBrandBoardAggregateType<T extends BrandBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandBoard[P]>
      : GetScalarType<T[P], AggregateBrandBoard[P]>
  }




  export type BrandBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandBoardWhereInput
    orderBy?: BrandBoardOrderByWithAggregationInput | BrandBoardOrderByWithAggregationInput[]
    by: BrandBoardScalarFieldEnum[] | BrandBoardScalarFieldEnum
    having?: BrandBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandBoardCountAggregateInputType | true
    _min?: BrandBoardMinAggregateInputType
    _max?: BrandBoardMaxAggregateInputType
  }

  export type BrandBoardGroupByOutputType = {
    id: string
    userId: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt: Date
    updatedAt: Date
    _count: BrandBoardCountAggregateOutputType | null
    _min: BrandBoardMinAggregateOutputType | null
    _max: BrandBoardMaxAggregateOutputType | null
  }

  type GetBrandBoardGroupByPayload<T extends BrandBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandBoardGroupByOutputType[P]>
            : GetScalarType<T[P], BrandBoardGroupByOutputType[P]>
        }
      >
    >


  export type BrandBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    feel?: boolean
    persona?: boolean
    demographics?: boolean
    colors?: boolean
    typography?: boolean
    visualContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandBoard"]>

  export type BrandBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    feel?: boolean
    persona?: boolean
    demographics?: boolean
    colors?: boolean
    typography?: boolean
    visualContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandBoard"]>

  export type BrandBoardSelectScalar = {
    id?: boolean
    userId?: boolean
    feel?: boolean
    persona?: boolean
    demographics?: boolean
    colors?: boolean
    typography?: boolean
    visualContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BrandBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BrandBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandBoard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      feel: string
      persona: string
      demographics: string
      colors: string
      typography: string
      visualContent: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brandBoard"]>
    composites: {}
  }

  type BrandBoardGetPayload<S extends boolean | null | undefined | BrandBoardDefaultArgs> = $Result.GetResult<Prisma.$BrandBoardPayload, S>

  type BrandBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandBoardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandBoardCountAggregateInputType | true
    }

  export interface BrandBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandBoard'], meta: { name: 'BrandBoard' } }
    /**
     * Find zero or one BrandBoard that matches the filter.
     * @param {BrandBoardFindUniqueArgs} args - Arguments to find a BrandBoard
     * @example
     * // Get one BrandBoard
     * const brandBoard = await prisma.brandBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandBoardFindUniqueArgs>(args: SelectSubset<T, BrandBoardFindUniqueArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BrandBoard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BrandBoardFindUniqueOrThrowArgs} args - Arguments to find a BrandBoard
     * @example
     * // Get one BrandBoard
     * const brandBoard = await prisma.brandBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BrandBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardFindFirstArgs} args - Arguments to find a BrandBoard
     * @example
     * // Get one BrandBoard
     * const brandBoard = await prisma.brandBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandBoardFindFirstArgs>(args?: SelectSubset<T, BrandBoardFindFirstArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BrandBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardFindFirstOrThrowArgs} args - Arguments to find a BrandBoard
     * @example
     * // Get one BrandBoard
     * const brandBoard = await prisma.brandBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BrandBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandBoards
     * const brandBoards = await prisma.brandBoard.findMany()
     * 
     * // Get first 10 BrandBoards
     * const brandBoards = await prisma.brandBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandBoardWithIdOnly = await prisma.brandBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandBoardFindManyArgs>(args?: SelectSubset<T, BrandBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BrandBoard.
     * @param {BrandBoardCreateArgs} args - Arguments to create a BrandBoard.
     * @example
     * // Create one BrandBoard
     * const BrandBoard = await prisma.brandBoard.create({
     *   data: {
     *     // ... data to create a BrandBoard
     *   }
     * })
     * 
     */
    create<T extends BrandBoardCreateArgs>(args: SelectSubset<T, BrandBoardCreateArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BrandBoards.
     * @param {BrandBoardCreateManyArgs} args - Arguments to create many BrandBoards.
     * @example
     * // Create many BrandBoards
     * const brandBoard = await prisma.brandBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandBoardCreateManyArgs>(args?: SelectSubset<T, BrandBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrandBoards and returns the data saved in the database.
     * @param {BrandBoardCreateManyAndReturnArgs} args - Arguments to create many BrandBoards.
     * @example
     * // Create many BrandBoards
     * const brandBoard = await prisma.brandBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrandBoards and only return the `id`
     * const brandBoardWithIdOnly = await prisma.brandBoard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BrandBoard.
     * @param {BrandBoardDeleteArgs} args - Arguments to delete one BrandBoard.
     * @example
     * // Delete one BrandBoard
     * const BrandBoard = await prisma.brandBoard.delete({
     *   where: {
     *     // ... filter to delete one BrandBoard
     *   }
     * })
     * 
     */
    delete<T extends BrandBoardDeleteArgs>(args: SelectSubset<T, BrandBoardDeleteArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BrandBoard.
     * @param {BrandBoardUpdateArgs} args - Arguments to update one BrandBoard.
     * @example
     * // Update one BrandBoard
     * const brandBoard = await prisma.brandBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandBoardUpdateArgs>(args: SelectSubset<T, BrandBoardUpdateArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BrandBoards.
     * @param {BrandBoardDeleteManyArgs} args - Arguments to filter BrandBoards to delete.
     * @example
     * // Delete a few BrandBoards
     * const { count } = await prisma.brandBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandBoardDeleteManyArgs>(args?: SelectSubset<T, BrandBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandBoards
     * const brandBoard = await prisma.brandBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandBoardUpdateManyArgs>(args: SelectSubset<T, BrandBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandBoard.
     * @param {BrandBoardUpsertArgs} args - Arguments to update or create a BrandBoard.
     * @example
     * // Update or create a BrandBoard
     * const brandBoard = await prisma.brandBoard.upsert({
     *   create: {
     *     // ... data to create a BrandBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandBoard we want to update
     *   }
     * })
     */
    upsert<T extends BrandBoardUpsertArgs>(args: SelectSubset<T, BrandBoardUpsertArgs<ExtArgs>>): Prisma__BrandBoardClient<$Result.GetResult<Prisma.$BrandBoardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BrandBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardCountArgs} args - Arguments to filter BrandBoards to count.
     * @example
     * // Count the number of BrandBoards
     * const count = await prisma.brandBoard.count({
     *   where: {
     *     // ... the filter for the BrandBoards we want to count
     *   }
     * })
    **/
    count<T extends BrandBoardCountArgs>(
      args?: Subset<T, BrandBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandBoardAggregateArgs>(args: Subset<T, BrandBoardAggregateArgs>): Prisma.PrismaPromise<GetBrandBoardAggregateType<T>>

    /**
     * Group by BrandBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandBoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandBoardGroupByArgs['orderBy'] }
        : { orderBy?: BrandBoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandBoard model
   */
  readonly fields: BrandBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BrandBoard model
   */ 
  interface BrandBoardFieldRefs {
    readonly id: FieldRef<"BrandBoard", 'String'>
    readonly userId: FieldRef<"BrandBoard", 'String'>
    readonly feel: FieldRef<"BrandBoard", 'String'>
    readonly persona: FieldRef<"BrandBoard", 'String'>
    readonly demographics: FieldRef<"BrandBoard", 'String'>
    readonly colors: FieldRef<"BrandBoard", 'String'>
    readonly typography: FieldRef<"BrandBoard", 'String'>
    readonly visualContent: FieldRef<"BrandBoard", 'String'>
    readonly createdAt: FieldRef<"BrandBoard", 'DateTime'>
    readonly updatedAt: FieldRef<"BrandBoard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BrandBoard findUnique
   */
  export type BrandBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter, which BrandBoard to fetch.
     */
    where: BrandBoardWhereUniqueInput
  }

  /**
   * BrandBoard findUniqueOrThrow
   */
  export type BrandBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter, which BrandBoard to fetch.
     */
    where: BrandBoardWhereUniqueInput
  }

  /**
   * BrandBoard findFirst
   */
  export type BrandBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter, which BrandBoard to fetch.
     */
    where?: BrandBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandBoards to fetch.
     */
    orderBy?: BrandBoardOrderByWithRelationInput | BrandBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandBoards.
     */
    cursor?: BrandBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandBoards.
     */
    distinct?: BrandBoardScalarFieldEnum | BrandBoardScalarFieldEnum[]
  }

  /**
   * BrandBoard findFirstOrThrow
   */
  export type BrandBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter, which BrandBoard to fetch.
     */
    where?: BrandBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandBoards to fetch.
     */
    orderBy?: BrandBoardOrderByWithRelationInput | BrandBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandBoards.
     */
    cursor?: BrandBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandBoards.
     */
    distinct?: BrandBoardScalarFieldEnum | BrandBoardScalarFieldEnum[]
  }

  /**
   * BrandBoard findMany
   */
  export type BrandBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter, which BrandBoards to fetch.
     */
    where?: BrandBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandBoards to fetch.
     */
    orderBy?: BrandBoardOrderByWithRelationInput | BrandBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandBoards.
     */
    cursor?: BrandBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandBoards.
     */
    skip?: number
    distinct?: BrandBoardScalarFieldEnum | BrandBoardScalarFieldEnum[]
  }

  /**
   * BrandBoard create
   */
  export type BrandBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandBoard.
     */
    data: XOR<BrandBoardCreateInput, BrandBoardUncheckedCreateInput>
  }

  /**
   * BrandBoard createMany
   */
  export type BrandBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandBoards.
     */
    data: BrandBoardCreateManyInput | BrandBoardCreateManyInput[]
  }

  /**
   * BrandBoard createManyAndReturn
   */
  export type BrandBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BrandBoards.
     */
    data: BrandBoardCreateManyInput | BrandBoardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrandBoard update
   */
  export type BrandBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandBoard.
     */
    data: XOR<BrandBoardUpdateInput, BrandBoardUncheckedUpdateInput>
    /**
     * Choose, which BrandBoard to update.
     */
    where: BrandBoardWhereUniqueInput
  }

  /**
   * BrandBoard updateMany
   */
  export type BrandBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandBoards.
     */
    data: XOR<BrandBoardUpdateManyMutationInput, BrandBoardUncheckedUpdateManyInput>
    /**
     * Filter which BrandBoards to update
     */
    where?: BrandBoardWhereInput
  }

  /**
   * BrandBoard upsert
   */
  export type BrandBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandBoard to update in case it exists.
     */
    where: BrandBoardWhereUniqueInput
    /**
     * In case the BrandBoard found by the `where` argument doesn't exist, create a new BrandBoard with this data.
     */
    create: XOR<BrandBoardCreateInput, BrandBoardUncheckedCreateInput>
    /**
     * In case the BrandBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandBoardUpdateInput, BrandBoardUncheckedUpdateInput>
  }

  /**
   * BrandBoard delete
   */
  export type BrandBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
    /**
     * Filter which BrandBoard to delete.
     */
    where: BrandBoardWhereUniqueInput
  }

  /**
   * BrandBoard deleteMany
   */
  export type BrandBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandBoards to delete
     */
    where?: BrandBoardWhereInput
  }

  /**
   * BrandBoard without action
   */
  export type BrandBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandBoard
     */
    select?: BrandBoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandBoardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OriginStoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedStory: 'generatedStory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OriginStoryScalarFieldEnum = (typeof OriginStoryScalarFieldEnum)[keyof typeof OriginStoryScalarFieldEnum]


  export const MarketGapScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedReport: 'generatedReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketGapScalarFieldEnum = (typeof MarketGapScalarFieldEnum)[keyof typeof MarketGapScalarFieldEnum]


  export const TribalIdentityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedReport: 'generatedReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TribalIdentityScalarFieldEnum = (typeof TribalIdentityScalarFieldEnum)[keyof typeof TribalIdentityScalarFieldEnum]


  export const UniqueMechanismScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedReport: 'generatedReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UniqueMechanismScalarFieldEnum = (typeof UniqueMechanismScalarFieldEnum)[keyof typeof UniqueMechanismScalarFieldEnum]


  export const USPStatementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedReport: 'generatedReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type USPStatementScalarFieldEnum = (typeof USPStatementScalarFieldEnum)[keyof typeof USPStatementScalarFieldEnum]


  export const MessagingSummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    answers: 'answers',
    generatedReport: 'generatedReport',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessagingSummaryScalarFieldEnum = (typeof MessagingSummaryScalarFieldEnum)[keyof typeof MessagingSummaryScalarFieldEnum]


  export const GeneratedCourseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    pricingTier: 'pricingTier',
    tone: 'tone',
    moduleCount: 'moduleCount',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GeneratedCourseScalarFieldEnum = (typeof GeneratedCourseScalarFieldEnum)[keyof typeof GeneratedCourseScalarFieldEnum]


  export const BrandBoardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    feel: 'feel',
    persona: 'persona',
    demographics: 'demographics',
    colors: 'colors',
    typography: 'typography',
    visualContent: 'visualContent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandBoardScalarFieldEnum = (typeof BrandBoardScalarFieldEnum)[keyof typeof BrandBoardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    originStory?: XOR<OriginStoryNullableRelationFilter, OriginStoryWhereInput> | null
    marketGap?: XOR<MarketGapNullableRelationFilter, MarketGapWhereInput> | null
    tribe?: XOR<TribalIdentityNullableRelationFilter, TribalIdentityWhereInput> | null
    mechanism?: XOR<UniqueMechanismNullableRelationFilter, UniqueMechanismWhereInput> | null
    usp?: XOR<USPStatementNullableRelationFilter, USPStatementWhereInput> | null
    summary?: XOR<MessagingSummaryNullableRelationFilter, MessagingSummaryWhereInput> | null
    courses?: GeneratedCourseListRelationFilter
    brandBoards?: BrandBoardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originStory?: OriginStoryOrderByWithRelationInput
    marketGap?: MarketGapOrderByWithRelationInput
    tribe?: TribalIdentityOrderByWithRelationInput
    mechanism?: UniqueMechanismOrderByWithRelationInput
    usp?: USPStatementOrderByWithRelationInput
    summary?: MessagingSummaryOrderByWithRelationInput
    courses?: GeneratedCourseOrderByRelationAggregateInput
    brandBoards?: BrandBoardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    originStory?: XOR<OriginStoryNullableRelationFilter, OriginStoryWhereInput> | null
    marketGap?: XOR<MarketGapNullableRelationFilter, MarketGapWhereInput> | null
    tribe?: XOR<TribalIdentityNullableRelationFilter, TribalIdentityWhereInput> | null
    mechanism?: XOR<UniqueMechanismNullableRelationFilter, UniqueMechanismWhereInput> | null
    usp?: XOR<USPStatementNullableRelationFilter, USPStatementWhereInput> | null
    summary?: XOR<MessagingSummaryNullableRelationFilter, MessagingSummaryWhereInput> | null
    courses?: GeneratedCourseListRelationFilter
    brandBoards?: BrandBoardListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OriginStoryWhereInput = {
    AND?: OriginStoryWhereInput | OriginStoryWhereInput[]
    OR?: OriginStoryWhereInput[]
    NOT?: OriginStoryWhereInput | OriginStoryWhereInput[]
    id?: StringFilter<"OriginStory"> | string
    userId?: StringFilter<"OriginStory"> | string
    answers?: StringFilter<"OriginStory"> | string
    generatedStory?: StringNullableFilter<"OriginStory"> | string | null
    createdAt?: DateTimeFilter<"OriginStory"> | Date | string
    updatedAt?: DateTimeFilter<"OriginStory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OriginStoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedStory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OriginStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OriginStoryWhereInput | OriginStoryWhereInput[]
    OR?: OriginStoryWhereInput[]
    NOT?: OriginStoryWhereInput | OriginStoryWhereInput[]
    answers?: StringFilter<"OriginStory"> | string
    generatedStory?: StringNullableFilter<"OriginStory"> | string | null
    createdAt?: DateTimeFilter<"OriginStory"> | Date | string
    updatedAt?: DateTimeFilter<"OriginStory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OriginStoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedStory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OriginStoryCountOrderByAggregateInput
    _max?: OriginStoryMaxOrderByAggregateInput
    _min?: OriginStoryMinOrderByAggregateInput
  }

  export type OriginStoryScalarWhereWithAggregatesInput = {
    AND?: OriginStoryScalarWhereWithAggregatesInput | OriginStoryScalarWhereWithAggregatesInput[]
    OR?: OriginStoryScalarWhereWithAggregatesInput[]
    NOT?: OriginStoryScalarWhereWithAggregatesInput | OriginStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginStory"> | string
    userId?: StringWithAggregatesFilter<"OriginStory"> | string
    answers?: StringWithAggregatesFilter<"OriginStory"> | string
    generatedStory?: StringNullableWithAggregatesFilter<"OriginStory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OriginStory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OriginStory"> | Date | string
  }

  export type MarketGapWhereInput = {
    AND?: MarketGapWhereInput | MarketGapWhereInput[]
    OR?: MarketGapWhereInput[]
    NOT?: MarketGapWhereInput | MarketGapWhereInput[]
    id?: StringFilter<"MarketGap"> | string
    userId?: StringFilter<"MarketGap"> | string
    answers?: StringFilter<"MarketGap"> | string
    generatedReport?: StringNullableFilter<"MarketGap"> | string | null
    createdAt?: DateTimeFilter<"MarketGap"> | Date | string
    updatedAt?: DateTimeFilter<"MarketGap"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MarketGapOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MarketGapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MarketGapWhereInput | MarketGapWhereInput[]
    OR?: MarketGapWhereInput[]
    NOT?: MarketGapWhereInput | MarketGapWhereInput[]
    answers?: StringFilter<"MarketGap"> | string
    generatedReport?: StringNullableFilter<"MarketGap"> | string | null
    createdAt?: DateTimeFilter<"MarketGap"> | Date | string
    updatedAt?: DateTimeFilter<"MarketGap"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MarketGapOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketGapCountOrderByAggregateInput
    _max?: MarketGapMaxOrderByAggregateInput
    _min?: MarketGapMinOrderByAggregateInput
  }

  export type MarketGapScalarWhereWithAggregatesInput = {
    AND?: MarketGapScalarWhereWithAggregatesInput | MarketGapScalarWhereWithAggregatesInput[]
    OR?: MarketGapScalarWhereWithAggregatesInput[]
    NOT?: MarketGapScalarWhereWithAggregatesInput | MarketGapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketGap"> | string
    userId?: StringWithAggregatesFilter<"MarketGap"> | string
    answers?: StringWithAggregatesFilter<"MarketGap"> | string
    generatedReport?: StringNullableWithAggregatesFilter<"MarketGap"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MarketGap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarketGap"> | Date | string
  }

  export type TribalIdentityWhereInput = {
    AND?: TribalIdentityWhereInput | TribalIdentityWhereInput[]
    OR?: TribalIdentityWhereInput[]
    NOT?: TribalIdentityWhereInput | TribalIdentityWhereInput[]
    id?: StringFilter<"TribalIdentity"> | string
    userId?: StringFilter<"TribalIdentity"> | string
    answers?: StringFilter<"TribalIdentity"> | string
    generatedReport?: StringNullableFilter<"TribalIdentity"> | string | null
    createdAt?: DateTimeFilter<"TribalIdentity"> | Date | string
    updatedAt?: DateTimeFilter<"TribalIdentity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TribalIdentityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TribalIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TribalIdentityWhereInput | TribalIdentityWhereInput[]
    OR?: TribalIdentityWhereInput[]
    NOT?: TribalIdentityWhereInput | TribalIdentityWhereInput[]
    answers?: StringFilter<"TribalIdentity"> | string
    generatedReport?: StringNullableFilter<"TribalIdentity"> | string | null
    createdAt?: DateTimeFilter<"TribalIdentity"> | Date | string
    updatedAt?: DateTimeFilter<"TribalIdentity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TribalIdentityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TribalIdentityCountOrderByAggregateInput
    _max?: TribalIdentityMaxOrderByAggregateInput
    _min?: TribalIdentityMinOrderByAggregateInput
  }

  export type TribalIdentityScalarWhereWithAggregatesInput = {
    AND?: TribalIdentityScalarWhereWithAggregatesInput | TribalIdentityScalarWhereWithAggregatesInput[]
    OR?: TribalIdentityScalarWhereWithAggregatesInput[]
    NOT?: TribalIdentityScalarWhereWithAggregatesInput | TribalIdentityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TribalIdentity"> | string
    userId?: StringWithAggregatesFilter<"TribalIdentity"> | string
    answers?: StringWithAggregatesFilter<"TribalIdentity"> | string
    generatedReport?: StringNullableWithAggregatesFilter<"TribalIdentity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TribalIdentity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TribalIdentity"> | Date | string
  }

  export type UniqueMechanismWhereInput = {
    AND?: UniqueMechanismWhereInput | UniqueMechanismWhereInput[]
    OR?: UniqueMechanismWhereInput[]
    NOT?: UniqueMechanismWhereInput | UniqueMechanismWhereInput[]
    id?: StringFilter<"UniqueMechanism"> | string
    userId?: StringFilter<"UniqueMechanism"> | string
    answers?: StringFilter<"UniqueMechanism"> | string
    generatedReport?: StringNullableFilter<"UniqueMechanism"> | string | null
    createdAt?: DateTimeFilter<"UniqueMechanism"> | Date | string
    updatedAt?: DateTimeFilter<"UniqueMechanism"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UniqueMechanismOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UniqueMechanismWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UniqueMechanismWhereInput | UniqueMechanismWhereInput[]
    OR?: UniqueMechanismWhereInput[]
    NOT?: UniqueMechanismWhereInput | UniqueMechanismWhereInput[]
    answers?: StringFilter<"UniqueMechanism"> | string
    generatedReport?: StringNullableFilter<"UniqueMechanism"> | string | null
    createdAt?: DateTimeFilter<"UniqueMechanism"> | Date | string
    updatedAt?: DateTimeFilter<"UniqueMechanism"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UniqueMechanismOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UniqueMechanismCountOrderByAggregateInput
    _max?: UniqueMechanismMaxOrderByAggregateInput
    _min?: UniqueMechanismMinOrderByAggregateInput
  }

  export type UniqueMechanismScalarWhereWithAggregatesInput = {
    AND?: UniqueMechanismScalarWhereWithAggregatesInput | UniqueMechanismScalarWhereWithAggregatesInput[]
    OR?: UniqueMechanismScalarWhereWithAggregatesInput[]
    NOT?: UniqueMechanismScalarWhereWithAggregatesInput | UniqueMechanismScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UniqueMechanism"> | string
    userId?: StringWithAggregatesFilter<"UniqueMechanism"> | string
    answers?: StringWithAggregatesFilter<"UniqueMechanism"> | string
    generatedReport?: StringNullableWithAggregatesFilter<"UniqueMechanism"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UniqueMechanism"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UniqueMechanism"> | Date | string
  }

  export type USPStatementWhereInput = {
    AND?: USPStatementWhereInput | USPStatementWhereInput[]
    OR?: USPStatementWhereInput[]
    NOT?: USPStatementWhereInput | USPStatementWhereInput[]
    id?: StringFilter<"USPStatement"> | string
    userId?: StringFilter<"USPStatement"> | string
    answers?: StringFilter<"USPStatement"> | string
    generatedReport?: StringNullableFilter<"USPStatement"> | string | null
    createdAt?: DateTimeFilter<"USPStatement"> | Date | string
    updatedAt?: DateTimeFilter<"USPStatement"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type USPStatementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type USPStatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: USPStatementWhereInput | USPStatementWhereInput[]
    OR?: USPStatementWhereInput[]
    NOT?: USPStatementWhereInput | USPStatementWhereInput[]
    answers?: StringFilter<"USPStatement"> | string
    generatedReport?: StringNullableFilter<"USPStatement"> | string | null
    createdAt?: DateTimeFilter<"USPStatement"> | Date | string
    updatedAt?: DateTimeFilter<"USPStatement"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type USPStatementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: USPStatementCountOrderByAggregateInput
    _max?: USPStatementMaxOrderByAggregateInput
    _min?: USPStatementMinOrderByAggregateInput
  }

  export type USPStatementScalarWhereWithAggregatesInput = {
    AND?: USPStatementScalarWhereWithAggregatesInput | USPStatementScalarWhereWithAggregatesInput[]
    OR?: USPStatementScalarWhereWithAggregatesInput[]
    NOT?: USPStatementScalarWhereWithAggregatesInput | USPStatementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"USPStatement"> | string
    userId?: StringWithAggregatesFilter<"USPStatement"> | string
    answers?: StringWithAggregatesFilter<"USPStatement"> | string
    generatedReport?: StringNullableWithAggregatesFilter<"USPStatement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"USPStatement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"USPStatement"> | Date | string
  }

  export type MessagingSummaryWhereInput = {
    AND?: MessagingSummaryWhereInput | MessagingSummaryWhereInput[]
    OR?: MessagingSummaryWhereInput[]
    NOT?: MessagingSummaryWhereInput | MessagingSummaryWhereInput[]
    id?: StringFilter<"MessagingSummary"> | string
    userId?: StringFilter<"MessagingSummary"> | string
    answers?: StringFilter<"MessagingSummary"> | string
    generatedReport?: StringNullableFilter<"MessagingSummary"> | string | null
    createdAt?: DateTimeFilter<"MessagingSummary"> | Date | string
    updatedAt?: DateTimeFilter<"MessagingSummary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessagingSummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MessagingSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MessagingSummaryWhereInput | MessagingSummaryWhereInput[]
    OR?: MessagingSummaryWhereInput[]
    NOT?: MessagingSummaryWhereInput | MessagingSummaryWhereInput[]
    answers?: StringFilter<"MessagingSummary"> | string
    generatedReport?: StringNullableFilter<"MessagingSummary"> | string | null
    createdAt?: DateTimeFilter<"MessagingSummary"> | Date | string
    updatedAt?: DateTimeFilter<"MessagingSummary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MessagingSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessagingSummaryCountOrderByAggregateInput
    _max?: MessagingSummaryMaxOrderByAggregateInput
    _min?: MessagingSummaryMinOrderByAggregateInput
  }

  export type MessagingSummaryScalarWhereWithAggregatesInput = {
    AND?: MessagingSummaryScalarWhereWithAggregatesInput | MessagingSummaryScalarWhereWithAggregatesInput[]
    OR?: MessagingSummaryScalarWhereWithAggregatesInput[]
    NOT?: MessagingSummaryScalarWhereWithAggregatesInput | MessagingSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessagingSummary"> | string
    userId?: StringWithAggregatesFilter<"MessagingSummary"> | string
    answers?: StringWithAggregatesFilter<"MessagingSummary"> | string
    generatedReport?: StringNullableWithAggregatesFilter<"MessagingSummary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MessagingSummary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessagingSummary"> | Date | string
  }

  export type GeneratedCourseWhereInput = {
    AND?: GeneratedCourseWhereInput | GeneratedCourseWhereInput[]
    OR?: GeneratedCourseWhereInput[]
    NOT?: GeneratedCourseWhereInput | GeneratedCourseWhereInput[]
    id?: StringFilter<"GeneratedCourse"> | string
    userId?: StringFilter<"GeneratedCourse"> | string
    title?: StringFilter<"GeneratedCourse"> | string
    description?: StringFilter<"GeneratedCourse"> | string
    pricingTier?: StringFilter<"GeneratedCourse"> | string
    tone?: StringFilter<"GeneratedCourse"> | string
    moduleCount?: IntFilter<"GeneratedCourse"> | number
    content?: StringFilter<"GeneratedCourse"> | string
    createdAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GeneratedCourseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricingTier?: SortOrder
    tone?: SortOrder
    moduleCount?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GeneratedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedCourseWhereInput | GeneratedCourseWhereInput[]
    OR?: GeneratedCourseWhereInput[]
    NOT?: GeneratedCourseWhereInput | GeneratedCourseWhereInput[]
    userId?: StringFilter<"GeneratedCourse"> | string
    title?: StringFilter<"GeneratedCourse"> | string
    description?: StringFilter<"GeneratedCourse"> | string
    pricingTier?: StringFilter<"GeneratedCourse"> | string
    tone?: StringFilter<"GeneratedCourse"> | string
    moduleCount?: IntFilter<"GeneratedCourse"> | number
    content?: StringFilter<"GeneratedCourse"> | string
    createdAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GeneratedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricingTier?: SortOrder
    tone?: SortOrder
    moduleCount?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GeneratedCourseCountOrderByAggregateInput
    _avg?: GeneratedCourseAvgOrderByAggregateInput
    _max?: GeneratedCourseMaxOrderByAggregateInput
    _min?: GeneratedCourseMinOrderByAggregateInput
    _sum?: GeneratedCourseSumOrderByAggregateInput
  }

  export type GeneratedCourseScalarWhereWithAggregatesInput = {
    AND?: GeneratedCourseScalarWhereWithAggregatesInput | GeneratedCourseScalarWhereWithAggregatesInput[]
    OR?: GeneratedCourseScalarWhereWithAggregatesInput[]
    NOT?: GeneratedCourseScalarWhereWithAggregatesInput | GeneratedCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    userId?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    title?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    description?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    pricingTier?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    tone?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    moduleCount?: IntWithAggregatesFilter<"GeneratedCourse"> | number
    content?: StringWithAggregatesFilter<"GeneratedCourse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedCourse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GeneratedCourse"> | Date | string
  }

  export type BrandBoardWhereInput = {
    AND?: BrandBoardWhereInput | BrandBoardWhereInput[]
    OR?: BrandBoardWhereInput[]
    NOT?: BrandBoardWhereInput | BrandBoardWhereInput[]
    id?: StringFilter<"BrandBoard"> | string
    userId?: StringFilter<"BrandBoard"> | string
    feel?: StringFilter<"BrandBoard"> | string
    persona?: StringFilter<"BrandBoard"> | string
    demographics?: StringFilter<"BrandBoard"> | string
    colors?: StringFilter<"BrandBoard"> | string
    typography?: StringFilter<"BrandBoard"> | string
    visualContent?: StringFilter<"BrandBoard"> | string
    createdAt?: DateTimeFilter<"BrandBoard"> | Date | string
    updatedAt?: DateTimeFilter<"BrandBoard"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BrandBoardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    feel?: SortOrder
    persona?: SortOrder
    demographics?: SortOrder
    colors?: SortOrder
    typography?: SortOrder
    visualContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BrandBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandBoardWhereInput | BrandBoardWhereInput[]
    OR?: BrandBoardWhereInput[]
    NOT?: BrandBoardWhereInput | BrandBoardWhereInput[]
    userId?: StringFilter<"BrandBoard"> | string
    feel?: StringFilter<"BrandBoard"> | string
    persona?: StringFilter<"BrandBoard"> | string
    demographics?: StringFilter<"BrandBoard"> | string
    colors?: StringFilter<"BrandBoard"> | string
    typography?: StringFilter<"BrandBoard"> | string
    visualContent?: StringFilter<"BrandBoard"> | string
    createdAt?: DateTimeFilter<"BrandBoard"> | Date | string
    updatedAt?: DateTimeFilter<"BrandBoard"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BrandBoardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    feel?: SortOrder
    persona?: SortOrder
    demographics?: SortOrder
    colors?: SortOrder
    typography?: SortOrder
    visualContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandBoardCountOrderByAggregateInput
    _max?: BrandBoardMaxOrderByAggregateInput
    _min?: BrandBoardMinOrderByAggregateInput
  }

  export type BrandBoardScalarWhereWithAggregatesInput = {
    AND?: BrandBoardScalarWhereWithAggregatesInput | BrandBoardScalarWhereWithAggregatesInput[]
    OR?: BrandBoardScalarWhereWithAggregatesInput[]
    NOT?: BrandBoardScalarWhereWithAggregatesInput | BrandBoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BrandBoard"> | string
    userId?: StringWithAggregatesFilter<"BrandBoard"> | string
    feel?: StringWithAggregatesFilter<"BrandBoard"> | string
    persona?: StringWithAggregatesFilter<"BrandBoard"> | string
    demographics?: StringWithAggregatesFilter<"BrandBoard"> | string
    colors?: StringWithAggregatesFilter<"BrandBoard"> | string
    typography?: StringWithAggregatesFilter<"BrandBoard"> | string
    visualContent?: StringWithAggregatesFilter<"BrandBoard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BrandBoard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BrandBoard"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginStoryCreateInput = {
    id?: string
    answers: string
    generatedStory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOriginStoryInput
  }

  export type OriginStoryUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedStory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginStoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOriginStoryNestedInput
  }

  export type OriginStoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginStoryCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedStory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginStoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginStoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketGapCreateInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMarketGapInput
  }

  export type MarketGapUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketGapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMarketGapNestedInput
  }

  export type MarketGapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketGapCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketGapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketGapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TribalIdentityCreateInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTribeInput
  }

  export type TribalIdentityUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TribalIdentityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTribeNestedInput
  }

  export type TribalIdentityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TribalIdentityCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TribalIdentityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TribalIdentityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniqueMechanismCreateInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMechanismInput
  }

  export type UniqueMechanismUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniqueMechanismUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMechanismNestedInput
  }

  export type UniqueMechanismUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniqueMechanismCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniqueMechanismUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniqueMechanismUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USPStatementCreateInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUspInput
  }

  export type USPStatementUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type USPStatementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUspNestedInput
  }

  export type USPStatementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USPStatementCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type USPStatementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USPStatementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagingSummaryCreateInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSummaryInput
  }

  export type MessagingSummaryUncheckedCreateInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagingSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSummaryNestedInput
  }

  export type MessagingSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagingSummaryCreateManyInput = {
    id?: string
    userId: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagingSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagingSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseCreateInput = {
    id?: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
  }

  export type GeneratedCourseUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type GeneratedCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseCreateManyInput = {
    id?: string
    userId: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardCreateInput = {
    id?: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrandBoardsInput
  }

  export type BrandBoardUncheckedCreateInput = {
    id?: string
    userId: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandBoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrandBoardsNestedInput
  }

  export type BrandBoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardCreateManyInput = {
    id?: string
    userId: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandBoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OriginStoryNullableRelationFilter = {
    is?: OriginStoryWhereInput | null
    isNot?: OriginStoryWhereInput | null
  }

  export type MarketGapNullableRelationFilter = {
    is?: MarketGapWhereInput | null
    isNot?: MarketGapWhereInput | null
  }

  export type TribalIdentityNullableRelationFilter = {
    is?: TribalIdentityWhereInput | null
    isNot?: TribalIdentityWhereInput | null
  }

  export type UniqueMechanismNullableRelationFilter = {
    is?: UniqueMechanismWhereInput | null
    isNot?: UniqueMechanismWhereInput | null
  }

  export type USPStatementNullableRelationFilter = {
    is?: USPStatementWhereInput | null
    isNot?: USPStatementWhereInput | null
  }

  export type MessagingSummaryNullableRelationFilter = {
    is?: MessagingSummaryWhereInput | null
    isNot?: MessagingSummaryWhereInput | null
  }

  export type GeneratedCourseListRelationFilter = {
    every?: GeneratedCourseWhereInput
    some?: GeneratedCourseWhereInput
    none?: GeneratedCourseWhereInput
  }

  export type BrandBoardListRelationFilter = {
    every?: BrandBoardWhereInput
    some?: BrandBoardWhereInput
    none?: BrandBoardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GeneratedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OriginStoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedStory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedStory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginStoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedStory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketGapCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketGapMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketGapMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TribalIdentityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TribalIdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TribalIdentityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniqueMechanismCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniqueMechanismMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniqueMechanismMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type USPStatementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type USPStatementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type USPStatementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagingSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagingSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagingSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    answers?: SortOrder
    generatedReport?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GeneratedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricingTier?: SortOrder
    tone?: SortOrder
    moduleCount?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedCourseAvgOrderByAggregateInput = {
    moduleCount?: SortOrder
  }

  export type GeneratedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricingTier?: SortOrder
    tone?: SortOrder
    moduleCount?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pricingTier?: SortOrder
    tone?: SortOrder
    moduleCount?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedCourseSumOrderByAggregateInput = {
    moduleCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BrandBoardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feel?: SortOrder
    persona?: SortOrder
    demographics?: SortOrder
    colors?: SortOrder
    typography?: SortOrder
    visualContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feel?: SortOrder
    persona?: SortOrder
    demographics?: SortOrder
    colors?: SortOrder
    typography?: SortOrder
    visualContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandBoardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feel?: SortOrder
    persona?: SortOrder
    demographics?: SortOrder
    colors?: SortOrder
    typography?: SortOrder
    visualContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OriginStoryCreateNestedOneWithoutUserInput = {
    create?: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: OriginStoryCreateOrConnectWithoutUserInput
    connect?: OriginStoryWhereUniqueInput
  }

  export type MarketGapCreateNestedOneWithoutUserInput = {
    create?: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
    connectOrCreate?: MarketGapCreateOrConnectWithoutUserInput
    connect?: MarketGapWhereUniqueInput
  }

  export type TribalIdentityCreateNestedOneWithoutUserInput = {
    create?: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: TribalIdentityCreateOrConnectWithoutUserInput
    connect?: TribalIdentityWhereUniqueInput
  }

  export type UniqueMechanismCreateNestedOneWithoutUserInput = {
    create?: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
    connectOrCreate?: UniqueMechanismCreateOrConnectWithoutUserInput
    connect?: UniqueMechanismWhereUniqueInput
  }

  export type USPStatementCreateNestedOneWithoutUserInput = {
    create?: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
    connectOrCreate?: USPStatementCreateOrConnectWithoutUserInput
    connect?: USPStatementWhereUniqueInput
  }

  export type MessagingSummaryCreateNestedOneWithoutUserInput = {
    create?: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: MessagingSummaryCreateOrConnectWithoutUserInput
    connect?: MessagingSummaryWhereUniqueInput
  }

  export type GeneratedCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput> | GeneratedCourseCreateWithoutUserInput[] | GeneratedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedCourseCreateOrConnectWithoutUserInput | GeneratedCourseCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedCourseCreateManyUserInputEnvelope
    connect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
  }

  export type BrandBoardCreateNestedManyWithoutUserInput = {
    create?: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput> | BrandBoardCreateWithoutUserInput[] | BrandBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandBoardCreateOrConnectWithoutUserInput | BrandBoardCreateOrConnectWithoutUserInput[]
    createMany?: BrandBoardCreateManyUserInputEnvelope
    connect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
  }

  export type OriginStoryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: OriginStoryCreateOrConnectWithoutUserInput
    connect?: OriginStoryWhereUniqueInput
  }

  export type MarketGapUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
    connectOrCreate?: MarketGapCreateOrConnectWithoutUserInput
    connect?: MarketGapWhereUniqueInput
  }

  export type TribalIdentityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: TribalIdentityCreateOrConnectWithoutUserInput
    connect?: TribalIdentityWhereUniqueInput
  }

  export type UniqueMechanismUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
    connectOrCreate?: UniqueMechanismCreateOrConnectWithoutUserInput
    connect?: UniqueMechanismWhereUniqueInput
  }

  export type USPStatementUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
    connectOrCreate?: USPStatementCreateOrConnectWithoutUserInput
    connect?: USPStatementWhereUniqueInput
  }

  export type MessagingSummaryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: MessagingSummaryCreateOrConnectWithoutUserInput
    connect?: MessagingSummaryWhereUniqueInput
  }

  export type GeneratedCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput> | GeneratedCourseCreateWithoutUserInput[] | GeneratedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedCourseCreateOrConnectWithoutUserInput | GeneratedCourseCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedCourseCreateManyUserInputEnvelope
    connect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
  }

  export type BrandBoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput> | BrandBoardCreateWithoutUserInput[] | BrandBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandBoardCreateOrConnectWithoutUserInput | BrandBoardCreateOrConnectWithoutUserInput[]
    createMany?: BrandBoardCreateManyUserInputEnvelope
    connect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OriginStoryUpdateOneWithoutUserNestedInput = {
    create?: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: OriginStoryCreateOrConnectWithoutUserInput
    upsert?: OriginStoryUpsertWithoutUserInput
    disconnect?: OriginStoryWhereInput | boolean
    delete?: OriginStoryWhereInput | boolean
    connect?: OriginStoryWhereUniqueInput
    update?: XOR<XOR<OriginStoryUpdateToOneWithWhereWithoutUserInput, OriginStoryUpdateWithoutUserInput>, OriginStoryUncheckedUpdateWithoutUserInput>
  }

  export type MarketGapUpdateOneWithoutUserNestedInput = {
    create?: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
    connectOrCreate?: MarketGapCreateOrConnectWithoutUserInput
    upsert?: MarketGapUpsertWithoutUserInput
    disconnect?: MarketGapWhereInput | boolean
    delete?: MarketGapWhereInput | boolean
    connect?: MarketGapWhereUniqueInput
    update?: XOR<XOR<MarketGapUpdateToOneWithWhereWithoutUserInput, MarketGapUpdateWithoutUserInput>, MarketGapUncheckedUpdateWithoutUserInput>
  }

  export type TribalIdentityUpdateOneWithoutUserNestedInput = {
    create?: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: TribalIdentityCreateOrConnectWithoutUserInput
    upsert?: TribalIdentityUpsertWithoutUserInput
    disconnect?: TribalIdentityWhereInput | boolean
    delete?: TribalIdentityWhereInput | boolean
    connect?: TribalIdentityWhereUniqueInput
    update?: XOR<XOR<TribalIdentityUpdateToOneWithWhereWithoutUserInput, TribalIdentityUpdateWithoutUserInput>, TribalIdentityUncheckedUpdateWithoutUserInput>
  }

  export type UniqueMechanismUpdateOneWithoutUserNestedInput = {
    create?: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
    connectOrCreate?: UniqueMechanismCreateOrConnectWithoutUserInput
    upsert?: UniqueMechanismUpsertWithoutUserInput
    disconnect?: UniqueMechanismWhereInput | boolean
    delete?: UniqueMechanismWhereInput | boolean
    connect?: UniqueMechanismWhereUniqueInput
    update?: XOR<XOR<UniqueMechanismUpdateToOneWithWhereWithoutUserInput, UniqueMechanismUpdateWithoutUserInput>, UniqueMechanismUncheckedUpdateWithoutUserInput>
  }

  export type USPStatementUpdateOneWithoutUserNestedInput = {
    create?: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
    connectOrCreate?: USPStatementCreateOrConnectWithoutUserInput
    upsert?: USPStatementUpsertWithoutUserInput
    disconnect?: USPStatementWhereInput | boolean
    delete?: USPStatementWhereInput | boolean
    connect?: USPStatementWhereUniqueInput
    update?: XOR<XOR<USPStatementUpdateToOneWithWhereWithoutUserInput, USPStatementUpdateWithoutUserInput>, USPStatementUncheckedUpdateWithoutUserInput>
  }

  export type MessagingSummaryUpdateOneWithoutUserNestedInput = {
    create?: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: MessagingSummaryCreateOrConnectWithoutUserInput
    upsert?: MessagingSummaryUpsertWithoutUserInput
    disconnect?: MessagingSummaryWhereInput | boolean
    delete?: MessagingSummaryWhereInput | boolean
    connect?: MessagingSummaryWhereUniqueInput
    update?: XOR<XOR<MessagingSummaryUpdateToOneWithWhereWithoutUserInput, MessagingSummaryUpdateWithoutUserInput>, MessagingSummaryUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput> | GeneratedCourseCreateWithoutUserInput[] | GeneratedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedCourseCreateOrConnectWithoutUserInput | GeneratedCourseCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedCourseUpsertWithWhereUniqueWithoutUserInput | GeneratedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedCourseCreateManyUserInputEnvelope
    set?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    disconnect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    delete?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    connect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    update?: GeneratedCourseUpdateWithWhereUniqueWithoutUserInput | GeneratedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedCourseUpdateManyWithWhereWithoutUserInput | GeneratedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedCourseScalarWhereInput | GeneratedCourseScalarWhereInput[]
  }

  export type BrandBoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput> | BrandBoardCreateWithoutUserInput[] | BrandBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandBoardCreateOrConnectWithoutUserInput | BrandBoardCreateOrConnectWithoutUserInput[]
    upsert?: BrandBoardUpsertWithWhereUniqueWithoutUserInput | BrandBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BrandBoardCreateManyUserInputEnvelope
    set?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    disconnect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    delete?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    connect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    update?: BrandBoardUpdateWithWhereUniqueWithoutUserInput | BrandBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BrandBoardUpdateManyWithWhereWithoutUserInput | BrandBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BrandBoardScalarWhereInput | BrandBoardScalarWhereInput[]
  }

  export type OriginStoryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: OriginStoryCreateOrConnectWithoutUserInput
    upsert?: OriginStoryUpsertWithoutUserInput
    disconnect?: OriginStoryWhereInput | boolean
    delete?: OriginStoryWhereInput | boolean
    connect?: OriginStoryWhereUniqueInput
    update?: XOR<XOR<OriginStoryUpdateToOneWithWhereWithoutUserInput, OriginStoryUpdateWithoutUserInput>, OriginStoryUncheckedUpdateWithoutUserInput>
  }

  export type MarketGapUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
    connectOrCreate?: MarketGapCreateOrConnectWithoutUserInput
    upsert?: MarketGapUpsertWithoutUserInput
    disconnect?: MarketGapWhereInput | boolean
    delete?: MarketGapWhereInput | boolean
    connect?: MarketGapWhereUniqueInput
    update?: XOR<XOR<MarketGapUpdateToOneWithWhereWithoutUserInput, MarketGapUpdateWithoutUserInput>, MarketGapUncheckedUpdateWithoutUserInput>
  }

  export type TribalIdentityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: TribalIdentityCreateOrConnectWithoutUserInput
    upsert?: TribalIdentityUpsertWithoutUserInput
    disconnect?: TribalIdentityWhereInput | boolean
    delete?: TribalIdentityWhereInput | boolean
    connect?: TribalIdentityWhereUniqueInput
    update?: XOR<XOR<TribalIdentityUpdateToOneWithWhereWithoutUserInput, TribalIdentityUpdateWithoutUserInput>, TribalIdentityUncheckedUpdateWithoutUserInput>
  }

  export type UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
    connectOrCreate?: UniqueMechanismCreateOrConnectWithoutUserInput
    upsert?: UniqueMechanismUpsertWithoutUserInput
    disconnect?: UniqueMechanismWhereInput | boolean
    delete?: UniqueMechanismWhereInput | boolean
    connect?: UniqueMechanismWhereUniqueInput
    update?: XOR<XOR<UniqueMechanismUpdateToOneWithWhereWithoutUserInput, UniqueMechanismUpdateWithoutUserInput>, UniqueMechanismUncheckedUpdateWithoutUserInput>
  }

  export type USPStatementUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
    connectOrCreate?: USPStatementCreateOrConnectWithoutUserInput
    upsert?: USPStatementUpsertWithoutUserInput
    disconnect?: USPStatementWhereInput | boolean
    delete?: USPStatementWhereInput | boolean
    connect?: USPStatementWhereUniqueInput
    update?: XOR<XOR<USPStatementUpdateToOneWithWhereWithoutUserInput, USPStatementUpdateWithoutUserInput>, USPStatementUncheckedUpdateWithoutUserInput>
  }

  export type MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
    connectOrCreate?: MessagingSummaryCreateOrConnectWithoutUserInput
    upsert?: MessagingSummaryUpsertWithoutUserInput
    disconnect?: MessagingSummaryWhereInput | boolean
    delete?: MessagingSummaryWhereInput | boolean
    connect?: MessagingSummaryWhereUniqueInput
    update?: XOR<XOR<MessagingSummaryUpdateToOneWithWhereWithoutUserInput, MessagingSummaryUpdateWithoutUserInput>, MessagingSummaryUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput> | GeneratedCourseCreateWithoutUserInput[] | GeneratedCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedCourseCreateOrConnectWithoutUserInput | GeneratedCourseCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedCourseUpsertWithWhereUniqueWithoutUserInput | GeneratedCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedCourseCreateManyUserInputEnvelope
    set?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    disconnect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    delete?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    connect?: GeneratedCourseWhereUniqueInput | GeneratedCourseWhereUniqueInput[]
    update?: GeneratedCourseUpdateWithWhereUniqueWithoutUserInput | GeneratedCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedCourseUpdateManyWithWhereWithoutUserInput | GeneratedCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedCourseScalarWhereInput | GeneratedCourseScalarWhereInput[]
  }

  export type BrandBoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput> | BrandBoardCreateWithoutUserInput[] | BrandBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BrandBoardCreateOrConnectWithoutUserInput | BrandBoardCreateOrConnectWithoutUserInput[]
    upsert?: BrandBoardUpsertWithWhereUniqueWithoutUserInput | BrandBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BrandBoardCreateManyUserInputEnvelope
    set?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    disconnect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    delete?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    connect?: BrandBoardWhereUniqueInput | BrandBoardWhereUniqueInput[]
    update?: BrandBoardUpdateWithWhereUniqueWithoutUserInput | BrandBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BrandBoardUpdateManyWithWhereWithoutUserInput | BrandBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BrandBoardScalarWhereInput | BrandBoardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOriginStoryInput = {
    create?: XOR<UserCreateWithoutOriginStoryInput, UserUncheckedCreateWithoutOriginStoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOriginStoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOriginStoryNestedInput = {
    create?: XOR<UserCreateWithoutOriginStoryInput, UserUncheckedCreateWithoutOriginStoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOriginStoryInput
    upsert?: UserUpsertWithoutOriginStoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOriginStoryInput, UserUpdateWithoutOriginStoryInput>, UserUncheckedUpdateWithoutOriginStoryInput>
  }

  export type UserCreateNestedOneWithoutMarketGapInput = {
    create?: XOR<UserCreateWithoutMarketGapInput, UserUncheckedCreateWithoutMarketGapInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarketGapInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMarketGapNestedInput = {
    create?: XOR<UserCreateWithoutMarketGapInput, UserUncheckedCreateWithoutMarketGapInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarketGapInput
    upsert?: UserUpsertWithoutMarketGapInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMarketGapInput, UserUpdateWithoutMarketGapInput>, UserUncheckedUpdateWithoutMarketGapInput>
  }

  export type UserCreateNestedOneWithoutTribeInput = {
    create?: XOR<UserCreateWithoutTribeInput, UserUncheckedCreateWithoutTribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutTribeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTribeNestedInput = {
    create?: XOR<UserCreateWithoutTribeInput, UserUncheckedCreateWithoutTribeInput>
    connectOrCreate?: UserCreateOrConnectWithoutTribeInput
    upsert?: UserUpsertWithoutTribeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTribeInput, UserUpdateWithoutTribeInput>, UserUncheckedUpdateWithoutTribeInput>
  }

  export type UserCreateNestedOneWithoutMechanismInput = {
    create?: XOR<UserCreateWithoutMechanismInput, UserUncheckedCreateWithoutMechanismInput>
    connectOrCreate?: UserCreateOrConnectWithoutMechanismInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMechanismNestedInput = {
    create?: XOR<UserCreateWithoutMechanismInput, UserUncheckedCreateWithoutMechanismInput>
    connectOrCreate?: UserCreateOrConnectWithoutMechanismInput
    upsert?: UserUpsertWithoutMechanismInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMechanismInput, UserUpdateWithoutMechanismInput>, UserUncheckedUpdateWithoutMechanismInput>
  }

  export type UserCreateNestedOneWithoutUspInput = {
    create?: XOR<UserCreateWithoutUspInput, UserUncheckedCreateWithoutUspInput>
    connectOrCreate?: UserCreateOrConnectWithoutUspInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUspNestedInput = {
    create?: XOR<UserCreateWithoutUspInput, UserUncheckedCreateWithoutUspInput>
    connectOrCreate?: UserCreateOrConnectWithoutUspInput
    upsert?: UserUpsertWithoutUspInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUspInput, UserUpdateWithoutUspInput>, UserUncheckedUpdateWithoutUspInput>
  }

  export type UserCreateNestedOneWithoutSummaryInput = {
    create?: XOR<UserCreateWithoutSummaryInput, UserUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSummaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<UserCreateWithoutSummaryInput, UserUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSummaryInput
    upsert?: UserUpsertWithoutSummaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSummaryInput, UserUpdateWithoutSummaryInput>, UserUncheckedUpdateWithoutSummaryInput>
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserCreateNestedOneWithoutBrandBoardsInput = {
    create?: XOR<UserCreateWithoutBrandBoardsInput, UserUncheckedCreateWithoutBrandBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBrandBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBrandBoardsInput, UserUncheckedCreateWithoutBrandBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandBoardsInput
    upsert?: UserUpsertWithoutBrandBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrandBoardsInput, UserUpdateWithoutBrandBoardsInput>, UserUncheckedUpdateWithoutBrandBoardsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OriginStoryCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedStory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginStoryUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedStory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OriginStoryCreateOrConnectWithoutUserInput = {
    where: OriginStoryWhereUniqueInput
    create: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
  }

  export type MarketGapCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketGapUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketGapCreateOrConnectWithoutUserInput = {
    where: MarketGapWhereUniqueInput
    create: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
  }

  export type TribalIdentityCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TribalIdentityUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TribalIdentityCreateOrConnectWithoutUserInput = {
    where: TribalIdentityWhereUniqueInput
    create: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
  }

  export type UniqueMechanismCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniqueMechanismUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniqueMechanismCreateOrConnectWithoutUserInput = {
    where: UniqueMechanismWhereUniqueInput
    create: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
  }

  export type USPStatementCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type USPStatementUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type USPStatementCreateOrConnectWithoutUserInput = {
    where: USPStatementWhereUniqueInput
    create: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
  }

  export type MessagingSummaryCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagingSummaryUncheckedCreateWithoutUserInput = {
    id?: string
    answers: string
    generatedReport?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagingSummaryCreateOrConnectWithoutUserInput = {
    where: MessagingSummaryWhereUniqueInput
    create: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
  }

  export type GeneratedCourseCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedCourseUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedCourseCreateOrConnectWithoutUserInput = {
    where: GeneratedCourseWhereUniqueInput
    create: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput>
  }

  export type GeneratedCourseCreateManyUserInputEnvelope = {
    data: GeneratedCourseCreateManyUserInput | GeneratedCourseCreateManyUserInput[]
  }

  export type BrandBoardCreateWithoutUserInput = {
    id?: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandBoardUncheckedCreateWithoutUserInput = {
    id?: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandBoardCreateOrConnectWithoutUserInput = {
    where: BrandBoardWhereUniqueInput
    create: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput>
  }

  export type BrandBoardCreateManyUserInputEnvelope = {
    data: BrandBoardCreateManyUserInput | BrandBoardCreateManyUserInput[]
  }

  export type OriginStoryUpsertWithoutUserInput = {
    update: XOR<OriginStoryUpdateWithoutUserInput, OriginStoryUncheckedUpdateWithoutUserInput>
    create: XOR<OriginStoryCreateWithoutUserInput, OriginStoryUncheckedCreateWithoutUserInput>
    where?: OriginStoryWhereInput
  }

  export type OriginStoryUpdateToOneWithWhereWithoutUserInput = {
    where?: OriginStoryWhereInput
    data: XOR<OriginStoryUpdateWithoutUserInput, OriginStoryUncheckedUpdateWithoutUserInput>
  }

  export type OriginStoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginStoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedStory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketGapUpsertWithoutUserInput = {
    update: XOR<MarketGapUpdateWithoutUserInput, MarketGapUncheckedUpdateWithoutUserInput>
    create: XOR<MarketGapCreateWithoutUserInput, MarketGapUncheckedCreateWithoutUserInput>
    where?: MarketGapWhereInput
  }

  export type MarketGapUpdateToOneWithWhereWithoutUserInput = {
    where?: MarketGapWhereInput
    data: XOR<MarketGapUpdateWithoutUserInput, MarketGapUncheckedUpdateWithoutUserInput>
  }

  export type MarketGapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketGapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TribalIdentityUpsertWithoutUserInput = {
    update: XOR<TribalIdentityUpdateWithoutUserInput, TribalIdentityUncheckedUpdateWithoutUserInput>
    create: XOR<TribalIdentityCreateWithoutUserInput, TribalIdentityUncheckedCreateWithoutUserInput>
    where?: TribalIdentityWhereInput
  }

  export type TribalIdentityUpdateToOneWithWhereWithoutUserInput = {
    where?: TribalIdentityWhereInput
    data: XOR<TribalIdentityUpdateWithoutUserInput, TribalIdentityUncheckedUpdateWithoutUserInput>
  }

  export type TribalIdentityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TribalIdentityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniqueMechanismUpsertWithoutUserInput = {
    update: XOR<UniqueMechanismUpdateWithoutUserInput, UniqueMechanismUncheckedUpdateWithoutUserInput>
    create: XOR<UniqueMechanismCreateWithoutUserInput, UniqueMechanismUncheckedCreateWithoutUserInput>
    where?: UniqueMechanismWhereInput
  }

  export type UniqueMechanismUpdateToOneWithWhereWithoutUserInput = {
    where?: UniqueMechanismWhereInput
    data: XOR<UniqueMechanismUpdateWithoutUserInput, UniqueMechanismUncheckedUpdateWithoutUserInput>
  }

  export type UniqueMechanismUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniqueMechanismUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USPStatementUpsertWithoutUserInput = {
    update: XOR<USPStatementUpdateWithoutUserInput, USPStatementUncheckedUpdateWithoutUserInput>
    create: XOR<USPStatementCreateWithoutUserInput, USPStatementUncheckedCreateWithoutUserInput>
    where?: USPStatementWhereInput
  }

  export type USPStatementUpdateToOneWithWhereWithoutUserInput = {
    where?: USPStatementWhereInput
    data: XOR<USPStatementUpdateWithoutUserInput, USPStatementUncheckedUpdateWithoutUserInput>
  }

  export type USPStatementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USPStatementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagingSummaryUpsertWithoutUserInput = {
    update: XOR<MessagingSummaryUpdateWithoutUserInput, MessagingSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<MessagingSummaryCreateWithoutUserInput, MessagingSummaryUncheckedCreateWithoutUserInput>
    where?: MessagingSummaryWhereInput
  }

  export type MessagingSummaryUpdateToOneWithWhereWithoutUserInput = {
    where?: MessagingSummaryWhereInput
    data: XOR<MessagingSummaryUpdateWithoutUserInput, MessagingSummaryUncheckedUpdateWithoutUserInput>
  }

  export type MessagingSummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagingSummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    generatedReport?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneratedCourseWhereUniqueInput
    update: XOR<GeneratedCourseUpdateWithoutUserInput, GeneratedCourseUncheckedUpdateWithoutUserInput>
    create: XOR<GeneratedCourseCreateWithoutUserInput, GeneratedCourseUncheckedCreateWithoutUserInput>
  }

  export type GeneratedCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneratedCourseWhereUniqueInput
    data: XOR<GeneratedCourseUpdateWithoutUserInput, GeneratedCourseUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedCourseUpdateManyWithWhereWithoutUserInput = {
    where: GeneratedCourseScalarWhereInput
    data: XOR<GeneratedCourseUpdateManyMutationInput, GeneratedCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneratedCourseScalarWhereInput = {
    AND?: GeneratedCourseScalarWhereInput | GeneratedCourseScalarWhereInput[]
    OR?: GeneratedCourseScalarWhereInput[]
    NOT?: GeneratedCourseScalarWhereInput | GeneratedCourseScalarWhereInput[]
    id?: StringFilter<"GeneratedCourse"> | string
    userId?: StringFilter<"GeneratedCourse"> | string
    title?: StringFilter<"GeneratedCourse"> | string
    description?: StringFilter<"GeneratedCourse"> | string
    pricingTier?: StringFilter<"GeneratedCourse"> | string
    tone?: StringFilter<"GeneratedCourse"> | string
    moduleCount?: IntFilter<"GeneratedCourse"> | number
    content?: StringFilter<"GeneratedCourse"> | string
    createdAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
    updatedAt?: DateTimeFilter<"GeneratedCourse"> | Date | string
  }

  export type BrandBoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BrandBoardWhereUniqueInput
    update: XOR<BrandBoardUpdateWithoutUserInput, BrandBoardUncheckedUpdateWithoutUserInput>
    create: XOR<BrandBoardCreateWithoutUserInput, BrandBoardUncheckedCreateWithoutUserInput>
  }

  export type BrandBoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BrandBoardWhereUniqueInput
    data: XOR<BrandBoardUpdateWithoutUserInput, BrandBoardUncheckedUpdateWithoutUserInput>
  }

  export type BrandBoardUpdateManyWithWhereWithoutUserInput = {
    where: BrandBoardScalarWhereInput
    data: XOR<BrandBoardUpdateManyMutationInput, BrandBoardUncheckedUpdateManyWithoutUserInput>
  }

  export type BrandBoardScalarWhereInput = {
    AND?: BrandBoardScalarWhereInput | BrandBoardScalarWhereInput[]
    OR?: BrandBoardScalarWhereInput[]
    NOT?: BrandBoardScalarWhereInput | BrandBoardScalarWhereInput[]
    id?: StringFilter<"BrandBoard"> | string
    userId?: StringFilter<"BrandBoard"> | string
    feel?: StringFilter<"BrandBoard"> | string
    persona?: StringFilter<"BrandBoard"> | string
    demographics?: StringFilter<"BrandBoard"> | string
    colors?: StringFilter<"BrandBoard"> | string
    typography?: StringFilter<"BrandBoard"> | string
    visualContent?: StringFilter<"BrandBoard"> | string
    createdAt?: DateTimeFilter<"BrandBoard"> | Date | string
    updatedAt?: DateTimeFilter<"BrandBoard"> | Date | string
  }

  export type UserCreateWithoutOriginStoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOriginStoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOriginStoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOriginStoryInput, UserUncheckedCreateWithoutOriginStoryInput>
  }

  export type UserUpsertWithoutOriginStoryInput = {
    update: XOR<UserUpdateWithoutOriginStoryInput, UserUncheckedUpdateWithoutOriginStoryInput>
    create: XOR<UserCreateWithoutOriginStoryInput, UserUncheckedCreateWithoutOriginStoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOriginStoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOriginStoryInput, UserUncheckedUpdateWithoutOriginStoryInput>
  }

  export type UserUpdateWithoutOriginStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOriginStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMarketGapInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarketGapInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarketGapInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarketGapInput, UserUncheckedCreateWithoutMarketGapInput>
  }

  export type UserUpsertWithoutMarketGapInput = {
    update: XOR<UserUpdateWithoutMarketGapInput, UserUncheckedUpdateWithoutMarketGapInput>
    create: XOR<UserCreateWithoutMarketGapInput, UserUncheckedCreateWithoutMarketGapInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMarketGapInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMarketGapInput, UserUncheckedUpdateWithoutMarketGapInput>
  }

  export type UserUpdateWithoutMarketGapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarketGapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTribeInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTribeInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTribeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTribeInput, UserUncheckedCreateWithoutTribeInput>
  }

  export type UserUpsertWithoutTribeInput = {
    update: XOR<UserUpdateWithoutTribeInput, UserUncheckedUpdateWithoutTribeInput>
    create: XOR<UserCreateWithoutTribeInput, UserUncheckedCreateWithoutTribeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTribeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTribeInput, UserUncheckedUpdateWithoutTribeInput>
  }

  export type UserUpdateWithoutTribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTribeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMechanismInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMechanismInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMechanismInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMechanismInput, UserUncheckedCreateWithoutMechanismInput>
  }

  export type UserUpsertWithoutMechanismInput = {
    update: XOR<UserUpdateWithoutMechanismInput, UserUncheckedUpdateWithoutMechanismInput>
    create: XOR<UserCreateWithoutMechanismInput, UserUncheckedCreateWithoutMechanismInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMechanismInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMechanismInput, UserUncheckedUpdateWithoutMechanismInput>
  }

  export type UserUpdateWithoutMechanismInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMechanismInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUspInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUspInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUspInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUspInput, UserUncheckedCreateWithoutUspInput>
  }

  export type UserUpsertWithoutUspInput = {
    update: XOR<UserUpdateWithoutUspInput, UserUncheckedUpdateWithoutUspInput>
    create: XOR<UserCreateWithoutUspInput, UserUncheckedCreateWithoutUspInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUspInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUspInput, UserUncheckedUpdateWithoutUspInput>
  }

  export type UserUpdateWithoutUspInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUspInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSummaryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSummaryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSummaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSummaryInput, UserUncheckedCreateWithoutSummaryInput>
  }

  export type UserUpsertWithoutSummaryInput = {
    update: XOR<UserUpdateWithoutSummaryInput, UserUncheckedUpdateWithoutSummaryInput>
    create: XOR<UserCreateWithoutSummaryInput, UserUncheckedCreateWithoutSummaryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSummaryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSummaryInput, UserUncheckedUpdateWithoutSummaryInput>
  }

  export type UserUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    brandBoards?: BrandBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    brandBoards?: BrandBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    brandBoards?: BrandBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    brandBoards?: BrandBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBrandBoardsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryCreateNestedOneWithoutUserInput
    marketGap?: MarketGapCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismCreateNestedOneWithoutUserInput
    usp?: USPStatementCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBrandBoardsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originStory?: OriginStoryUncheckedCreateNestedOneWithoutUserInput
    marketGap?: MarketGapUncheckedCreateNestedOneWithoutUserInput
    tribe?: TribalIdentityUncheckedCreateNestedOneWithoutUserInput
    mechanism?: UniqueMechanismUncheckedCreateNestedOneWithoutUserInput
    usp?: USPStatementUncheckedCreateNestedOneWithoutUserInput
    summary?: MessagingSummaryUncheckedCreateNestedOneWithoutUserInput
    courses?: GeneratedCourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBrandBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrandBoardsInput, UserUncheckedCreateWithoutBrandBoardsInput>
  }

  export type UserUpsertWithoutBrandBoardsInput = {
    update: XOR<UserUpdateWithoutBrandBoardsInput, UserUncheckedUpdateWithoutBrandBoardsInput>
    create: XOR<UserCreateWithoutBrandBoardsInput, UserUncheckedCreateWithoutBrandBoardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrandBoardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrandBoardsInput, UserUncheckedUpdateWithoutBrandBoardsInput>
  }

  export type UserUpdateWithoutBrandBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUpdateOneWithoutUserNestedInput
    usp?: USPStatementUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBrandBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originStory?: OriginStoryUncheckedUpdateOneWithoutUserNestedInput
    marketGap?: MarketGapUncheckedUpdateOneWithoutUserNestedInput
    tribe?: TribalIdentityUncheckedUpdateOneWithoutUserNestedInput
    mechanism?: UniqueMechanismUncheckedUpdateOneWithoutUserNestedInput
    usp?: USPStatementUncheckedUpdateOneWithoutUserNestedInput
    summary?: MessagingSummaryUncheckedUpdateOneWithoutUserNestedInput
    courses?: GeneratedCourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneratedCourseCreateManyUserInput = {
    id?: string
    title: string
    description: string
    pricingTier: string
    tone: string
    moduleCount: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandBoardCreateManyUserInput = {
    id?: string
    feel: string
    persona: string
    demographics: string
    colors: string
    typography: string
    visualContent: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedCourseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedCourseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricingTier?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    moduleCount?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandBoardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feel?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
    demographics?: StringFieldUpdateOperationsInput | string
    colors?: StringFieldUpdateOperationsInput | string
    typography?: StringFieldUpdateOperationsInput | string
    visualContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OriginStoryDefaultArgs instead
     */
    export type OriginStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OriginStoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketGapDefaultArgs instead
     */
    export type MarketGapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketGapDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TribalIdentityDefaultArgs instead
     */
    export type TribalIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TribalIdentityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UniqueMechanismDefaultArgs instead
     */
    export type UniqueMechanismArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UniqueMechanismDefaultArgs<ExtArgs>
    /**
     * @deprecated Use USPStatementDefaultArgs instead
     */
    export type USPStatementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = USPStatementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessagingSummaryDefaultArgs instead
     */
    export type MessagingSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessagingSummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GeneratedCourseDefaultArgs instead
     */
    export type GeneratedCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GeneratedCourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandBoardDefaultArgs instead
     */
    export type BrandBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandBoardDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
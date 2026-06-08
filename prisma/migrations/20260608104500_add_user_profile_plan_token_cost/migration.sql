CREATE TYPE "UserPlan" AS ENUM ('FREE', 'PRO');

ALTER TABLE "User"
ADD COLUMN "profilePicture" TEXT,
ADD COLUMN "plan" "UserPlan" NOT NULL DEFAULT 'FREE',
ADD COLUMN "tokenCost" DECIMAL(12, 6) NOT NULL DEFAULT 0;

UPDATE "User" AS u
SET "tokenCost" = usage.cost
FROM (
    SELECT
        "userId",
        CAST(SUM(
            CASE
                WHEN model LIKE 'gpt-4o-mini%' THEN ("promptTokens" * 0.15 / 1000000.0) + ("completionTokens" * 0.60 / 1000000.0)
                WHEN model LIKE 'gpt-4o%' THEN ("promptTokens" * 2.50 / 1000000.0) + ("completionTokens" * 10.00 / 1000000.0)
                ELSE 0
            END
        ) AS DECIMAL(12, 6)) AS cost
    FROM "TokenUsage"
    GROUP BY "userId"
) AS usage
WHERE u.id = usage."userId";

ALTER TABLE "OriginStory"
ADD COLUMN "generatedStorySections" TEXT;

ALTER TABLE "MarketGap"
ADD COLUMN "generatedReportSections" TEXT;

ALTER TABLE "TribalIdentity"
ADD COLUMN "generatedReportSections" TEXT;

ALTER TABLE "UniqueMechanism"
ADD COLUMN "generatedReportSections" TEXT;

ALTER TABLE "USPStatement"
ADD COLUMN "generatedReportSections" TEXT;

ALTER TABLE "MessagingSummary"
ADD COLUMN "generatedReportSections" TEXT;

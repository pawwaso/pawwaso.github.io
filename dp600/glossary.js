window.glossary = [
  {
    "term": "Activator",
    "definition": "The Fabric capability, previously called Data Activator, that monitors streaming or report data for conditions and triggers actions such as email, Teams messages, or Fabric item runs.",
    "example": "An activator rule sends a Teams alert when average freezer temperature exceeds a threshold for five consecutive minutes."
  },
  {
    "term": "Aggregation Table",
    "definition": "A smaller, pre-summarized table configured to answer queries in place of a large detail table, transparently redirecting matching queries for a large performance gain.",
    "example": "A monthly, product-level aggregation of a billion-row DirectQuery fact answers most visuals while drill-through still reaches the detail."
  },
  {
    "term": "ALL and REMOVEFILTERS",
    "definition": "DAX filter modifiers that clear filters from a table or columns, commonly used to compute totals that ignore the current selection.",
    "example": "Sales % of Total = DIVIDE([Total Sales], CALCULATE([Total Sales], REMOVEFILTERS(dim_product)))."
  },
  {
    "term": "Apache Spark",
    "definition": "The distributed compute engine built into Fabric that executes notebook and Spark job definition code in parallel across executors, with its own session, pool, and configuration model.",
    "example": "A PySpark job reading a terabyte of Parquet distributes the work across executors defined by the attached Spark pool."
  },
  {
    "term": "Audit Log",
    "definition": "The Microsoft Purview or Microsoft 365 record of user and system activities in Fabric, such as viewing reports, creating items, and changing permissions, searchable for compliance and usage analysis.",
    "example": "An admin exports audit activity to find who deleted a warehouse and when."
  },
  {
    "term": "Auto Compaction",
    "definition": "The Delta feature that triggers a small compaction after a write when too many small files have accumulated, keeping table layout healthy without a separate job.",
    "example": "A streaming ingestion table stays performant because auto compaction merges micro-batch files as they arrive."
  },
  {
    "term": "Auto Date/Time",
    "definition": "The Power BI setting that silently creates a hidden date table for every date column, convenient for small models but wasteful and inconsistent in enterprise models with a proper date dimension.",
    "example": "It is disabled globally so all time intelligence uses the shared, marked dim_date table."
  },
  {
    "term": "Best Practice Analyzer",
    "definition": "The rules engine in Tabular Editor that scans a semantic model against a rule set and reports violations of modeling and performance best practices.",
    "example": "It flags a floating point column used as a relationship key and a measure that does not use DIVIDE."
  },
  {
    "term": "Branch Out to New Workspace",
    "definition": "The Fabric Git feature that creates a new branch and a new workspace connected to it, giving a developer an isolated environment for a feature without disturbing shared workspaces.",
    "example": "A developer branches out, changes a notebook and a model in isolation, then raises a pull request back to main."
  },
  {
    "term": "Broadcast Join",
    "definition": "A Spark join strategy that sends a small table to every executor so the large table can be joined locally without shuffling it.",
    "example": "spark.sql.autoBroadcastJoinThreshold controls when a dimension is broadcast automatically, and broadcast() forces it."
  },
  {
    "term": "Bronze Layer",
    "definition": "The raw landing zone of a medallion architecture that stores source data in its original fidelity, usually append-only, to allow reprocessing.",
    "example": "Every nightly extract file is kept in the bronze layer so silver tables can be rebuilt if a transformation bug is found."
  },
  {
    "term": "Build Permission",
    "definition": "The semantic model permission that allows a user to create new content on the model, including reports, Analyze in Excel connections, and exports, as distinct from merely reading an existing report.",
    "example": "A user with Read but not Build can open a shared report but cannot connect Excel to the model."
  },
  {
    "term": "Bursting",
    "definition": "A capacity behavior that temporarily allows a single operation to consume more compute than the capacity's nominal size so that the job finishes faster, with the extra consumption still charged against the capacity over time.",
    "example": "A heavy Spark job on an F8 capacity briefly uses compute equivalent to a larger SKU, completing in minutes instead of hours, and the additional CU seconds are then smoothed over the following period."
  },
  {
    "term": "Caching in Spark",
    "definition": "Persisting a dataframe in executor memory or on disk so repeated actions do not recompute it, useful when the same intermediate result is used several times.",
    "example": "df.cache() before writing three different aggregations from the same cleansed dataframe avoids reading the source three times."
  },
  {
    "term": "CALCULATE",
    "definition": "The central DAX function that evaluates an expression in a filter context modified by the given filter arguments and modifiers.",
    "example": "Sales LY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(dim_date[Date]))."
  },
  {
    "term": "Calculated Column",
    "definition": "A DAX expression evaluated row by row when the model is refreshed or framed, materialized and compressed in the model, and therefore consuming memory.",
    "example": "Adding a Margin calculated column to a billion-row fact table increases model size, so the calculation is usually pushed to the lakehouse instead."
  },
  {
    "term": "Calculated Table",
    "definition": "A table whose rows are produced by a DAX expression rather than loaded from a source, useful for date tables, bridge tables, and disconnected parameter tables.",
    "example": "DateTable = CALENDARAUTO() creates a date table without loading one from the warehouse, although Direct Lake models do not support calculated tables."
  },
  {
    "term": "Calculation Group",
    "definition": "A modeling object containing calculation items that rewrite measure expressions, used to apply the same set of variants such as year-to-date or prior year to many measures without duplicating them.",
    "example": "A Time Intelligence calculation group provides Current, YTD, PY, and YoY % items that apply to every measure in the model."
  },
  {
    "term": "Calculation Item",
    "definition": "A single member of a calculation group whose DAX expression uses SELECTEDMEASURE to transform whichever measure is in scope.",
    "example": "The YTD item is defined as CALCULATE(SELECTEDMEASURE(), DATESYTD(dim_date[Date]))."
  },
  {
    "term": "Capacity Region",
    "definition": "The geographic region where a Fabric capacity, and therefore the data in its workspaces, is stored and processed, which constrains cross-item features such as cross-database queries and shortcuts.",
    "example": "Two warehouses in different regions cannot be joined with cross-database queries, so the team consolidates them into one region."
  },
  {
    "term": "Capacity Unit (CU)",
    "definition": "The abstract unit in which Fabric compute is sold and metered; each Fabric workload converts its own resource consumption (Spark vCores, warehouse query seconds, semantic model CPU) into CU seconds charged against the capacity.",
    "example": "A notebook run that uses 8 Spark vCores for 60 seconds is translated into a specific number of CU seconds and reported in the Fabric Capacity Metrics app."
  },
  {
    "term": "Cardinality",
    "definition": "The number of distinct values in a column, which drives dictionary size and compression in VertiPaq and influences relationship and index choices.",
    "example": "Removing a unique transaction identifier from the model eliminates the highest-cardinality column and halves the model size."
  },
  {
    "term": "Change Data Capture (CDC)",
    "definition": "The technique of capturing only inserted, updated, and deleted rows from a source so downstream processing handles deltas instead of full loads.",
    "example": "A pipeline reads a source system's change table and applies the changes to a silver Delta table with MERGE."
  },
  {
    "term": "Checkpoint Location",
    "definition": "The storage path where a Spark structured streaming query records its progress and state so it can resume without reprocessing or losing data.",
    "example": "Each streaming job is given its own checkpoint folder in Files/_checkpoints so restarts are safe."
  },
  {
    "term": "CI/CD for Fabric",
    "definition": "The practice of automating build, test, and release of Fabric content using Git integration, deployment pipelines, and REST APIs, usually driven from Azure DevOps or GitHub Actions.",
    "example": "A YAML pipeline updates the test workspace from the repository, runs DAX-based tests, and then deploys to production."
  },
  {
    "term": "Column-Level Security (CLS)",
    "definition": "The restriction of access to particular columns, implemented in a warehouse or SQL analytics endpoint with GRANT on specific columns, or in a semantic model as object-level security.",
    "example": "GRANT SELECT ON dbo.Employee(EmployeeId, Name) TO AnalystRole allows those two columns only."
  },
  {
    "term": "Common Table Expression (CTE)",
    "definition": "A named temporary result set defined with WITH at the start of a T-SQL statement, used to structure complex queries into readable steps.",
    "example": "WITH ranked AS (SELECT ..., ROW_NUMBER() OVER (...) rn FROM src) SELECT * FROM ranked WHERE rn = 1."
  },
  {
    "term": "Composite Model",
    "definition": "A semantic model that combines tables with different storage modes, or that mixes local tables with DirectQuery connections to other semantic models and Analysis Services models.",
    "example": "A composite model adds a small imported budget table to a DirectQuery connection to a certified enterprise model."
  },
  {
    "term": "Computed Entity",
    "definition": "A dataflow entity calculated from other entities already stored in dataflow storage, so the transformation is pushed to the storage engine instead of the source.",
    "example": "An aggregated sales-by-month entity is computed from a stored detail entity in the same dataflow."
  },
  {
    "term": "Connection and Credential",
    "definition": "The stored definition of how Fabric authenticates to a data source, managed centrally so items can share it, with options such as organizational account, service principal, key, or basic authentication.",
    "example": "A shared connection using a service principal is reused by several pipelines instead of each developer storing their own credentials."
  },
  {
    "term": "Context Transition",
    "definition": "The conversion of a row context into an equivalent filter context that occurs when CALCULATE, or a measure reference, is evaluated inside an iterator.",
    "example": "SUMX(dim_customer, [Total Sales]) works per customer because referencing the measure triggers context transition."
  },
  {
    "term": "Copilot in Fabric",
    "definition": "The generative AI assistance embedded in Fabric experiences that can draft notebook code, DAX measures, dataflow steps, and report visuals, subject to tenant settings and capacity requirements.",
    "example": "A user asks Copilot in a notebook to write the PySpark that deduplicates a dataframe by business key."
  },
  {
    "term": "Copy Data Activity",
    "definition": "The pipeline activity that moves data from a source connection to a destination at scale, with optional staging, mapping, and fault tolerance, but without complex transformation.",
    "example": "A Copy activity lands an on-premises SQL Server table into lakehouse Files as Parquet."
  },
  {
    "term": "COPY INTO",
    "definition": "The T-SQL statement used in a Fabric warehouse to bulk load CSV or Parquet files from OneLake or Azure storage into a table with high throughput.",
    "example": "COPY INTO dbo.Sales FROM 'https://account.dfs.core.windows.net/data/sales/*.parquet' WITH (FILE_TYPE = 'PARQUET')."
  },
  {
    "term": "Copy Job",
    "definition": "A Fabric item that simplifies data movement by providing a guided experience for full or incremental copy from a source to a destination, without building a pipeline by hand.",
    "example": "An engineer uses a Copy job to incrementally bring new rows from an Azure SQL table into a lakehouse table based on a watermark column."
  },
  {
    "term": "CREATE TABLE AS SELECT (CTAS)",
    "definition": "The T-SQL pattern that creates a new table from the result of a query in a single, set-based, minimally logged operation, widely used for warehouse transformations.",
    "example": "CREATE TABLE dbo.gold_sales AS SELECT ... FROM dbo.silver_sales JOIN dbo.dim_date ...."
  },
  {
    "term": "Cross-Database Query",
    "definition": "A query in a Fabric warehouse or SQL analytics endpoint that references tables in another warehouse, lakehouse, or mirrored database in the same region using three-part names, without moving data.",
    "example": "SELECT * FROM Lakehouse01.dbo.dim_product joined with the local fact table works after adding the lakehouse to the query's object explorer."
  },
  {
    "term": "Cross-Filter Direction",
    "definition": "The setting that controls whether a relationship filters in a single direction, from the one side to the many side, or in both directions.",
    "example": "Bidirectional filtering is avoided on large models because it can create ambiguity and slow queries; a measure using CROSSFILTER is preferred for the rare case that needs it."
  },
  {
    "term": "Custom Spark Pool",
    "definition": "A user-defined Spark pool with a chosen node family, node size, autoscale range, and dynamic executor allocation, created in workspace or capacity settings for workloads with specific resource needs.",
    "example": "A memory-hungry job gets a custom pool with Memory optimized large nodes and autoscale from 3 to 10 nodes."
  },
  {
    "term": "Data Analysis Expressions (DAX)",
    "definition": "The formula and query language of semantic models, used to define measures, calculated columns, calculated tables, row-level security filters, and queries against the model.",
    "example": "Total Sales = SUMX(fact_sales, fact_sales[Quantity] * fact_sales[UnitPrice])."
  },
  {
    "term": "Data Lineage View",
    "definition": "The workspace visualization that shows how items depend on each other, from data sources through lakehouses, dataflows, and semantic models to reports.",
    "example": "Lineage view reveals that three reports depend on a dataflow that is about to be deleted."
  },
  {
    "term": "Data Loss Prevention (DLP) Policy",
    "definition": "A Purview policy applied to Fabric items that detects sensitive information types or labels and can warn users, block sharing, or notify administrators.",
    "example": "A DLP policy flags a semantic model containing credit card numbers and alerts the compliance team."
  },
  {
    "term": "Data Pipeline",
    "definition": "The Fabric orchestration item, based on Azure Data Factory concepts, that arranges activities such as Copy data, Notebook, Dataflow, Stored procedure, and control-flow constructs into a schedulable workflow.",
    "example": "A pipeline runs a ForEach loop over source tables with a Copy activity, then calls a notebook, then refreshes a semantic model."
  },
  {
    "term": "Data Quality Dimension",
    "definition": "An aspect of data quality such as completeness, accuracy, consistency, timeliness, validity, or uniqueness, used to define concrete checks on a dataset.",
    "example": "A completeness check asserts that fewer than 0.1 percent of orders lack a customer key."
  },
  {
    "term": "Data Residency",
    "definition": "The requirement that data be stored and processed within a defined geography, which in Fabric is addressed by choosing capacity regions and by using multi-geo capacities.",
    "example": "A regulator requires that personal data remain in the country, so the workspace is assigned only to a capacity in that region."
  },
  {
    "term": "Data Skew",
    "definition": "The uneven distribution of data across Spark partitions that causes a few tasks to dominate run time, often caused by grouping or joining on a key with a very frequent value.",
    "example": "Half the rows carry the same customer identifier, so one task takes ten minutes while the rest finish in seconds."
  },
  {
    "term": "Data Skipping",
    "definition": "The use of per-file statistics such as minimum and maximum column values stored in the Delta log to avoid opening files that cannot contain matching rows.",
    "example": "A filter on OrderDate skips files whose recorded maximum OrderDate is earlier than the filter value."
  },
  {
    "term": "Data Type Optimization",
    "definition": "The choice of the narrowest appropriate data type and the reduction of unnecessary precision or cardinality, which reduces storage, memory, and query cost throughout the stack.",
    "example": "Splitting a datetime column into a date key and a time column improves compression dramatically in a semantic model."
  },
  {
    "term": "Data Validation",
    "definition": "The practice of asserting expectations about data, such as key uniqueness, referential integrity, allowed ranges, and row counts, as part of the pipeline rather than after a report looks wrong.",
    "example": "A notebook fails the run when duplicate business keys are found in the silver customer table."
  },
  {
    "term": "Data Wrangler",
    "definition": "The Fabric notebook tool that provides a grid-based interface for exploring and cleaning pandas or Spark dataframes, generating the equivalent code for each applied operation.",
    "example": "A user removes duplicates and fills missing values in Data Wrangler and copies the generated PySpark code back into the notebook."
  },
  {
    "term": "Dataflow Gen1",
    "definition": "The older Power BI dataflow type that stores output in internal storage as CSV-backed entities and lacks Gen2 features such as arbitrary data destinations, Fast copy, and the modern authoring canvas.",
    "example": "An existing Gen1 dataflow is migrated to Gen2 so its output can be written directly into a lakehouse table."
  },
  {
    "term": "Dataflow Gen2",
    "definition": "The Fabric low-code data preparation item that uses Power Query Online to connect, transform, and load data, optionally writing results to a data destination such as a lakehouse or warehouse.",
    "example": "An analyst builds a Dataflow Gen2 that cleans an Excel file, merges it with a SQL dimension, and writes the result to a warehouse table."
  },
  {
    "term": "Dataflow Gen2 Data Destination",
    "definition": "The output target configured per query in a Dataflow Gen2, such as a lakehouse, warehouse, KQL database, or Azure SQL Database, with append or replace update methods and optional fixed schema.",
    "example": "The dimension query is set to Replace into the warehouse, while the fact query appends to a lakehouse table."
  },
  {
    "term": "Dataverse Link to Fabric",
    "definition": "The Dataverse feature that exposes its tables in OneLake as Delta tables through a shortcut-based link, giving Fabric access to Dynamics 365 and Power Apps data without an export pipeline.",
    "example": "A lakehouse shortcut to the Dataverse managed lake makes account and opportunity tables queryable in Spark and T-SQL."
  },
  {
    "term": "DAX Query View",
    "definition": "The Power BI Desktop and Fabric view for writing and running DAX queries against a semantic model, useful for testing measures and validating results without building visuals.",
    "example": "A developer runs EVALUATE with a measure and a group-by to verify totals against the warehouse."
  },
  {
    "term": "DAX Studio",
    "definition": "A free external tool for running DAX queries, capturing query plans and server timings, and analyzing model metadata and size.",
    "example": "Server timings show that a slow measure spends 90 percent of its time in the formula engine, pointing to an inefficient iterator."
  },
  {
    "term": "Deduplication",
    "definition": "The removal of duplicate records according to a business key, usually keeping the most recent version based on a timestamp or version column.",
    "example": "A window function ranks rows by load time per business key and keeps only rank 1 in the silver table."
  },
  {
    "term": "Default Semantic Model",
    "definition": "The semantic model automatically created with a lakehouse or warehouse, which reflects its tables and cannot be moved, renamed to a separate lineage, or managed with the same flexibility as a custom model.",
    "example": "Because the default model updates automatically as tables change, teams still create a separate custom semantic model for production reporting."
  },
  {
    "term": "Deletion Vector",
    "definition": "A Delta Lake feature that records deleted rows separately instead of rewriting whole data files, which makes deletes and updates much faster but requires reader support.",
    "example": "A MERGE that deletes a few rows completes quickly because only a deletion vector is written, and a later OPTIMIZE materializes the change."
  },
  {
    "term": "Delta Lake",
    "definition": "The open table format used throughout Fabric, which layers a transaction log over Parquet files to add ACID transactions, schema enforcement, time travel, and efficient upserts.",
    "example": "Two concurrent notebook writes to the same table are serialized by the Delta transaction log so readers never see a partially written result."
  },
  {
    "term": "Delta Transaction Log",
    "definition": "The ordered set of JSON commit files and periodic Parquet checkpoints stored in a table's _delta_log folder that defines which data files belong to each version of the table.",
    "example": "Reading a Delta table means reading the log to determine the current file list, which is why deleting _delta_log corrupts the table even though the Parquet files remain."
  },
  {
    "term": "Deployment Pipeline",
    "definition": "The Fabric release tool with up to ten stages, typically Development, Test, and Production, that compares and deploys items between workspaces and applies deployment rules.",
    "example": "Selected items are deployed from Test to Production, with a deployment rule swapping the lakehouse connection to the production lakehouse."
  },
  {
    "term": "Deployment Rule",
    "definition": "A rule configured on a deployment pipeline stage that replaces data source connections or parameter values when content is deployed into that stage.",
    "example": "A data source rule points the semantic model to the production warehouse instead of the development one after deployment."
  },
  {
    "term": "Detect Data Changes",
    "definition": "The incremental refresh option that checks a last-modified column per partition and refreshes only the partitions whose maximum value has increased.",
    "example": "Only three of thirty daily partitions are refreshed because the other days show no change in the ModifiedOn column."
  },
  {
    "term": "Dimension Table",
    "definition": "A table of descriptive attributes used to filter, group, and label facts, ideally denormalized so a single table covers one business entity.",
    "example": "dim_product includes product name, category, and subcategory in one table rather than in a normalized hierarchy of three tables."
  },
  {
    "term": "Direct Lake Framing",
    "definition": "The operation that records which Delta table version a Direct Lake model should read, so newly written data becomes visible to the model and stale column segments are dropped from memory.",
    "example": "A pipeline calls a semantic model refresh after loading the gold tables, which reframes the model onto the new Delta version."
  },
  {
    "term": "Direct Lake Guardrail",
    "definition": "The per-SKU limits on Direct Lake models, such as maximum rows per table and maximum memory, beyond which queries fall back to DirectQuery or fail, depending on the configured fallback behavior.",
    "example": "A fact table exceeding the row guardrail for the capacity's SKU causes queries to fall back, so the team splits the table or scales the capacity."
  },
  {
    "term": "Direct Lake on OneLake",
    "definition": "The Direct Lake variant that reads Delta tables directly from OneLake without depending on the SQL analytics endpoint, and therefore does not support DirectQuery fallback.",
    "example": "A model is built as Direct Lake on OneLake so it reads shortcut tables in place, accepting that unsupported queries fail rather than fall back."
  },
  {
    "term": "Direct Lake Storage Mode",
    "definition": "The Fabric-only storage mode that reads Delta Parquet files in OneLake directly into the Analysis Services engine on demand, giving near-import performance without a scheduled data copy, and falling back to DirectQuery when a query cannot be served.",
    "example": "A Direct Lake model over gold lakehouse tables reflects new rows shortly after they are written, with no refresh of data required."
  },
  {
    "term": "DirectQuery Fallback",
    "definition": "The Direct Lake behavior of switching a query to DirectQuery against the SQL analytics endpoint when the data cannot be read directly, for example when guardrails are exceeded or a SQL view is involved.",
    "example": "Setting the fallback behavior to DirectLakeOnly makes such queries fail instead of silently running slower, which helps detect guardrail breaches during testing."
  },
  {
    "term": "DirectQuery Storage Mode",
    "definition": "The storage mode in which no data is cached in the model and every visual generates a query against the source system, providing current data at the cost of source-dependent performance.",
    "example": "A DirectQuery model over a warehouse shows up-to-the-second data but each slicer change issues new T-SQL."
  },
  {
    "term": "DIVIDE",
    "definition": "The DAX function that performs division while returning a specified alternate result, blank by default, instead of an error when the denominator is zero.",
    "example": "DIVIDE([Profit], [Revenue]) avoids the division-by-zero errors that the / operator would raise."
  },
  {
    "term": "Documentation as Metadata",
    "definition": "The practice of storing descriptions on items, tables, columns, and measures so that they surface in the catalog, in field lists, and in tooltips for report authors.",
    "example": "Each measure carries a description explaining its business definition, which appears when a report author hovers over it."
  },
  {
    "term": "Domain",
    "definition": "A logical grouping of workspaces in Fabric that supports data mesh style federated governance, with its own administrators, default settings, and branding.",
    "example": "Workspaces belonging to Sales, Finance, and Supply Chain are grouped into domains, each with a domain admin who curates its data products."
  },
  {
    "term": "Dual Storage Mode",
    "definition": "A table storage mode in a composite model that allows the table to act either as imported or as DirectQuery depending on the query, typically applied to dimensions used with both modes.",
    "example": "Setting dim_date to Dual lets aggregation queries hit the imported cache while detail queries join it in DirectQuery."
  },
  {
    "term": "Dynamic Data Masking",
    "definition": "A T-SQL feature that obfuscates column values for unprivileged users at query time while leaving the stored data unchanged.",
    "example": "An email column is masked so support staff see aXX@XXXX.com instead of the real address, unless granted UNMASK."
  },
  {
    "term": "Dynamic Management View (DMV)",
    "definition": "A system view that exposes engine metadata and activity, available in the warehouse for sessions and requests and in semantic models for tables, columns, and memory use.",
    "example": "Querying $SYSTEM.DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS through DAX Studio shows the memory each column consumes."
  },
  {
    "term": "Dynamic Row-Level Security",
    "definition": "Row-level security whose filter depends on the identity of the current user, typically by comparing a security table column to USERPRINCIPALNAME, so one role serves all users.",
    "example": "The filter [Email] = USERPRINCIPALNAME() on a user-to-territory mapping table gives each salesperson their own territories."
  },
  {
    "term": "Endorsement",
    "definition": "The Fabric mechanism for marking trustworthy content, with the Promoted level available to item owners and the Certified level restricted to reviewers designated by a tenant administrator, plus Master data for authoritative sources.",
    "example": "The central finance semantic model is Certified so users can distinguish it from many unendorsed copies in the OneLake catalog."
  },
  {
    "term": "Enhanced Refresh",
    "definition": "The Power BI REST API refresh operation that allows fine control over which tables and partitions are refreshed, the refresh type, parallelism, and commit behavior.",
    "example": "A pipeline calls enhanced refresh to process only the current-month partition of a large fact table."
  },
  {
    "term": "Environment Promotion",
    "definition": "The movement of validated content from development to test and then production, with connection and parameter values swapped so each stage points at its own data.",
    "example": "Deployment rules repoint the semantic model from DevWarehouse to ProdWarehouse during promotion."
  },
  {
    "term": "Eventhouse",
    "definition": "The Real-Time Intelligence container that holds one or more KQL databases and shares compute among them, optimized for high-volume, low-latency time series and log analytics.",
    "example": "An eventhouse hosts separate KQL databases for device telemetry and application logs while sharing the same compute."
  },
  {
    "term": "Eventstream",
    "definition": "The Real-Time Intelligence item that ingests streaming events from sources such as Azure Event Hubs, IoT Hub, or a custom endpoint, optionally transforms them, and routes them to destinations like an eventhouse, lakehouse, or activator.",
    "example": "Telemetry from devices flows through an eventstream that filters heartbeat messages and lands the rest in a KQL database."
  },
  {
    "term": "Experiment and ML Model Items",
    "definition": "The Fabric data science items that track machine learning runs, parameters, and metrics through MLflow and register trained models for reuse and batch scoring.",
    "example": "A notebook logs runs to an experiment, and the best run is registered as an ML model item that a later notebook loads to score new rows."
  },
  {
    "term": "External Data Sharing",
    "definition": "The Fabric capability that shares OneLake data in place with users in another tenant, controlled by a tenant setting, without copying the data across tenants.",
    "example": "A supplier in a partner tenant reads a shared folder through a shortcut created from the share invitation."
  },
  {
    "term": "External Shortcut",
    "definition": "A OneLake shortcut that targets storage outside Fabric, such as Azure Data Lake Storage Gen2, Amazon S3, S3-compatible storage, Google Cloud Storage, or Dataverse.",
    "example": "An engineer creates an Amazon S3 shortcut so an existing data lake on AWS can be queried by Fabric Spark without an ingestion pipeline."
  },
  {
    "term": "External Table",
    "definition": "A table whose metadata is registered in the lakehouse but whose data files live at an explicitly specified location, so dropping the table leaves the files untouched.",
    "example": "A notebook registers an external table over Files/curated/sales so the same files can be managed by another process without risk of deletion."
  },
  {
    "term": "F SKU",
    "definition": "The Fabric capacity purchase tier, ranging from F2 through F2048, that is bought through Azure, can be paused and resumed, and can be scaled up or down without moving content between workspaces.",
    "example": "A team runs development on a small F2 capacity during the day and switches production workloads to an F64 capacity, which is the smallest SKU that allows free users to consume Power BI content in a workspace."
  },
  {
    "term": "Fabric Administrator",
    "definition": "The tenant-level role that manages Fabric settings, capacities, domains, and governance features across the entire organization.",
    "example": "Only Fabric administrators can designate who is allowed to certify content."
  },
  {
    "term": "Fabric Capacity",
    "definition": "The pooled set of compute resources, measured in capacity units (CUs) and purchased as an F SKU or inherited from a Power BI Premium P SKU, that powers every Fabric workload in the workspaces assigned to it.",
    "example": "An F64 capacity provides 64 capacity units that are shared by Spark notebooks, warehouse queries, dataflow refreshes, and semantic model queries in all workspaces attached to that capacity."
  },
  {
    "term": "Fabric Capacity Metrics App",
    "definition": "The Power BI app that Fabric administrators install to analyze capacity unit consumption, interactive and background operations, overloaded periods, throttling, and the specific items or users responsible for the load.",
    "example": "An admin uses the app's ripple chart and the timepoint detail page to discover that one badly written notebook caused an overload window at 03:00."
  },
  {
    "term": "Fabric Item",
    "definition": "Any artifact that can be created inside a workspace, such as a lakehouse, warehouse, notebook, pipeline, dataflow, eventstream, semantic model, report, or environment, each with its own permissions and lineage.",
    "example": "A workspace list shows items of many types, and Git integration serializes the supported ones into folders in the repository."
  },
  {
    "term": "Fabric REST API",
    "definition": "The programmatic interface for creating, reading, updating, and deleting Fabric items, managing workspaces and capacities, and triggering jobs, used for automation and CI/CD.",
    "example": "A script calls the items API to create a notebook and the jobs API to run it on a schedule outside Fabric."
  },
  {
    "term": "Fabric SQL Database",
    "definition": "A Fabric item that provides an operational, transactional SQL database based on the Azure SQL Database engine, whose data is automatically replicated into OneLake in Delta format for analytics.",
    "example": "A small application writes orders to a Fabric SQL database, and analysts query the mirrored Delta tables in OneLake without touching the operational workload."
  },
  {
    "term": "Fabric Warehouse",
    "definition": "The Fabric item that provides a full, transactional, read-write T-SQL data warehouse with automatically managed compute, storing its data as Delta Parquet in OneLake.",
    "example": "A dimensional model is loaded into a warehouse using COPY INTO and CTAS statements, and ETL jobs update dimensions with MERGE-like patterns inside multi-table transactions."
  },
  {
    "term": "Fabric Workload",
    "definition": "One of the experience areas of Fabric, including Data Engineering, Data Factory, Data Warehouse, Data Science, Real-Time Intelligence, Industry Solutions, and Power BI, each surfacing the items relevant to it.",
    "example": "Switching to the Data Warehouse workload shows options to create a warehouse or a SQL database rather than Spark items."
  },
  {
    "term": "Fabric Workspace App",
    "definition": "The packaged, curated distribution of reports and dashboards from a workspace to a wider audience, with its own audiences and permissions, so consumers do not need workspace roles.",
    "example": "Finance publishes an app with two audiences, one seeing all regions and one seeing only EMEA content."
  },
  {
    "term": "Fact Table",
    "definition": "A table of business events or measurements at a defined grain, containing numeric measures and the foreign keys of its dimensions.",
    "example": "fact_sales stores one row per order line with quantity, unit price, and extended amount."
  },
  {
    "term": "Failure Path and Completion Path",
    "definition": "Pipeline dependency conditions such as On success, On fail, On completion, and On skip that control which activity runs next depending on the outcome of the previous one.",
    "example": "A Teams notification activity is connected to the load activity's failure path so the on-call engineer is alerted."
  },
  {
    "term": "Fast Copy",
    "definition": "The Dataflow Gen2 capability that uses the high-throughput pipeline copy engine instead of the mashup engine for large ingestion, greatly reducing load time when its requirements are met.",
    "example": "Enabling Fast copy on a query reading millions of rows from ADLS Gen2 cuts the refresh from an hour to minutes."
  },
  {
    "term": "Field Parameter",
    "definition": "A semantic model feature that creates a table of fields so users can dynamically choose which measures or dimensions a visual displays.",
    "example": "A slicer built on a field parameter lets users switch a chart's axis between Product, Region, and Channel."
  },
  {
    "term": "Filter Context",
    "definition": "The set of filters applied to the model when a DAX expression is evaluated, coming from visuals, slicers, rows and columns of a matrix, row-level security, and CALCULATE modifiers.",
    "example": "The same Total Sales measure returns a different number in each row of a matrix because each cell applies a different filter context."
  },
  {
    "term": "Flatten and Explode",
    "definition": "The transformations that convert nested structures and arrays into relational rows and columns, called Expand in Power Query and explode in Spark.",
    "example": "explode(df.orderLines) produces one row per order line from a document containing an array of lines."
  },
  {
    "term": "ForEach Activity",
    "definition": "The pipeline control-flow activity that iterates over an array and executes its inner activities once per item, optionally in parallel with a configurable batch count.",
    "example": "A lookup returns a list of 40 table names and a ForEach activity copies each of them with the same parameterized Copy activity."
  },
  {
    "term": "Git Integration",
    "definition": "The Fabric capability that connects a workspace to an Azure DevOps or GitHub repository and branch so supported items can be committed, compared, and updated as source files.",
    "example": "A developer commits notebook and semantic model changes from their feature workspace and opens a pull request for review."
  },
  {
    "term": "Gold Layer",
    "definition": "The business-ready, consumption-optimized layer of a medallion architecture, typically modeled as star schemas or aggregates that semantic models and reports read directly.",
    "example": "A gold fact_sales table with surrogate keys and a set of conformed dimensions feeds the Direct Lake semantic model."
  },
  {
    "term": "Hash Key",
    "definition": "A deterministic key derived from the concatenation of business columns with a hash function, used to compare rows for change detection or to build reproducible surrogate keys.",
    "example": "A SHA2_256 hash of the tracked attributes is stored so the load can detect type 2 changes with a single comparison."
  },
  {
    "term": "Hierarchy",
    "definition": "An ordered set of columns in a table that defines a drill path for report users, such as year to quarter to month or category to subcategory to product.",
    "example": "A Calendar hierarchy of Year, Quarter, Month, Date lets users drill down in a matrix with one click."
  },
  {
    "term": "High Concurrency Mode",
    "definition": "The Fabric Spark feature that shares one Spark session and its resources among multiple notebooks of the same user, reducing session start time and capacity consumption.",
    "example": "Three notebooks opened by the same developer share a single session, so only one set of executors is charged."
  },
  {
    "term": "Hybrid Table",
    "definition": "A table combining imported historical partitions with a DirectQuery partition for the most recent data, so reports show real-time rows without frequent full refreshes.",
    "example": "Enabling Get the latest data in real time with DirectQuery on an incremental refresh policy creates a hybrid table."
  },
  {
    "term": "Idempotency",
    "definition": "The property of a data process that produces the same result when run more than once with the same input, which is essential for safe retries.",
    "example": "A load that deletes the target partition before inserting it can be rerun safely after a failure, unlike a blind append."
  },
  {
    "term": "Identity and Surrogate Key Generation in Fabric",
    "definition": "The practice of producing surrogate keys without an IDENTITY column, since the Fabric warehouse does not support identity columns, typically using window functions, hashes, or Spark functions.",
    "example": "ROW_NUMBER() OVER (ORDER BY BusinessKey) plus the current maximum key assigns new dimension keys during the load."
  },
  {
    "term": "Impact Analysis",
    "definition": "The Fabric feature that lists the downstream items and users affected by a change to an item, and can notify the owners of that content.",
    "example": "Before renaming a column in a semantic model, the developer runs impact analysis and notifies the owners of the 12 dependent reports."
  },
  {
    "term": "Implicit Measure",
    "definition": "An aggregation created automatically when a numeric column is dropped into a visual, which is discouraged in enterprise models because it bypasses defined business logic and is unavailable to some clients.",
    "example": "Discourage implicit measures is enabled on a certified model so report authors must use the explicit Total Sales measure."
  },
  {
    "term": "Import Storage Mode",
    "definition": "The semantic model storage mode that copies and compresses source data into the in-memory VertiPaq engine, giving the fastest queries but requiring refreshes and holding data in memory.",
    "example": "A 200 MB departmental model is imported and refreshed eight times a day."
  },
  {
    "term": "Inactive Relationship",
    "definition": "A defined but disabled relationship, used when two tables are joined on more than one column pair, which can be activated in a calculation with USERELATIONSHIP.",
    "example": "fact_sales has an active relationship on OrderDateKey and an inactive one on ShipDateKey to dim_date."
  },
  {
    "term": "Incremental Refresh (Dataflow)",
    "definition": "A Dataflow Gen2 configuration that refreshes only a recent window of data based on a DateTime column, using bucketed ranges and a folding-capable source, so historical data is not reloaded.",
    "example": "A dataflow is set to keep five years of data and refresh only the last 10 days of the LastModified column."
  },
  {
    "term": "Incremental Refresh (Semantic Model)",
    "definition": "The partitioning strategy that refreshes only recent partitions of a table based on RangeStart and RangeEnd parameters, optionally with real-time DirectQuery for the latest data.",
    "example": "A policy archives five years, refreshes the last 10 days incrementally, and detects data changes using a modified-date column."
  },
  {
    "term": "Internal Shortcut",
    "definition": "A OneLake shortcut whose target is another Fabric item in the same tenant, such as a table or folder in a different lakehouse or warehouse, enabling data sharing across workspaces without duplication.",
    "example": "A departmental lakehouse creates internal shortcuts to certified gold tables in the central lakehouse so the department reuses governed data instead of copying it."
  },
  {
    "term": "Invoke Pipeline Activity",
    "definition": "The pipeline activity that runs another pipeline, enabling modular design with reusable child pipelines and a master orchestrator.",
    "example": "A master pipeline invokes an ingestion pipeline, then a transformation pipeline, then a refresh step."
  },
  {
    "term": "Item Ownership and Takeover",
    "definition": "The concept that some Fabric items run under the credentials of an owner identity, and that another user or service principal can take over ownership to keep scheduled operations working.",
    "example": "When the original creator leaves, an administrator takes over the dataflow so its scheduled refresh continues to run."
  },
  {
    "term": "Item Permission",
    "definition": "Access granted directly on an individual Fabric item, such as a lakehouse, warehouse, or semantic model, independently of workspace roles, typically through the item's Manage permissions or Share dialog.",
    "example": "A warehouse is shared with an external analyst who is given only ReadData on that one warehouse, without any role in the workspace."
  },
  {
    "term": "Iterator Function",
    "definition": "A DAX function such as SUMX, AVERAGEX, or FILTER that walks a table row by row and evaluates an expression in row context, which can be expensive over large tables.",
    "example": "Replacing SUMX over a fact table with a pre-computed column in the gold layer removes an expensive iteration from every query."
  },
  {
    "term": "KEEPFILTERS",
    "definition": "A DAX modifier that makes a filter argument intersect with the existing filter context instead of replacing it.",
    "example": "CALCULATE([Total Sales], KEEPFILTERS(dim_product[Color] = \"Red\")) returns blank for a visual already filtered to blue products."
  },
  {
    "term": "KQL Database",
    "definition": "A Fabric database queried with Kusto Query Language, designed for fast ingestion and analysis of telemetry, logs, and time series, and able to expose its data to OneLake for other engines.",
    "example": "An analyst runs a KQL query with summarize and bin to compute five-minute error rates over the last day."
  },
  {
    "term": "KQL Queryset",
    "definition": "The Fabric item that saves, runs, and shares Kusto queries against one or more KQL databases, similar to a SQL query file for a warehouse.",
    "example": "An operations team keeps a queryset of standard diagnostic KQL queries for the telemetry database."
  },
  {
    "term": "Kusto Query Language (KQL)",
    "definition": "The read-only, pipeline-style query language used by KQL databases and eventhouses, where a tabular source is piped through operators such as where, project, summarize, and join.",
    "example": "Telemetry | where Timestamp > ago(1h) | summarize avg(Temperature) by DeviceId."
  },
  {
    "term": "Label Inheritance",
    "definition": "The Fabric behavior in which a sensitivity label applied to an upstream item is automatically applied to downstream items and exports created from it.",
    "example": "Because the warehouse carries a Confidential label, a new semantic model built on it is labeled Confidential without user action."
  },
  {
    "term": "Lakehouse",
    "definition": "A Fabric item that combines a file area for unstructured and semi-structured data with a managed table area of Delta Lake tables, and automatically exposes a read-only SQL analytics endpoint and a default semantic model.",
    "example": "Raw JSON files land in the lakehouse Files area, a notebook converts them into Delta tables in the Tables area, and analysts query those tables with T-SQL through the endpoint."
  },
  {
    "term": "Lakehouse Files Area",
    "definition": "The unmanaged portion of a lakehouse where any file or folder can be stored in any format, comparable to a raw or bronze zone of a data lake.",
    "example": "A pipeline copies compressed CSV extracts into Files/raw/sales/2026/09 before a notebook parses them."
  },
  {
    "term": "Lakehouse Tables Area",
    "definition": "The managed portion of a lakehouse where data is stored as Delta Lake tables that are automatically discoverable by the SQL analytics endpoint, semantic models, and other engines.",
    "example": "Writing a Spark DataFrame with saveAsTable places the table in the Tables area, where it immediately appears in the SQL analytics endpoint."
  },
  {
    "term": "Large Semantic Model Storage Format",
    "definition": "The semantic model setting that stores the model in a format allowing it to grow beyond the default size limits and enables features such as enhanced refresh and incremental partitions at scale.",
    "example": "An enterprise model is switched to the large storage format before enabling incremental refresh over ten years of history."
  },
  {
    "term": "Lazy Evaluation",
    "definition": "The Spark model in which transformations build a plan and nothing is computed until an action such as count, collect, or write is called.",
    "example": "A chain of filters and joins runs only when the final write to a Delta table is executed."
  },
  {
    "term": "Linked Entity",
    "definition": "A dataflow reference to an entity in another dataflow, which enables layered preparation and reuse without recomputing the upstream query.",
    "example": "A gold dataflow references the cleansed customer entity produced by a silver dataflow instead of reading the source again."
  },
  {
    "term": "Liquid Clustering",
    "definition": "A Delta Lake data layout technique that replaces fixed partitioning and Z-order with an adaptive clustering of chosen columns, avoiding the small file and skew problems of over-partitioning.",
    "example": "A table clustered by CustomerId adapts as data grows instead of requiring a partition scheme redesign."
  },
  {
    "term": "Live Connection",
    "definition": "The report connectivity mode in which a report contains no model of its own and queries a published semantic model or Analysis Services model directly.",
    "example": "Twenty departmental reports live-connect to one certified enterprise model, so a measure fix reaches all of them at once."
  },
  {
    "term": "Lookup Activity",
    "definition": "The pipeline activity that reads a single row or a small result set from a source, most often to drive control flow or to retrieve configuration and watermark values.",
    "example": "A Lookup reads the last processed timestamp from a control table and passes it to a Copy activity's query."
  },
  {
    "term": "M Language",
    "definition": "The functional, case-sensitive formula language behind Power Query, in which each query is typically a let expression of named steps returning a final value.",
    "example": "let Source = Sql.Database(\"srv\",\"db\"), Filtered = Table.SelectRows(Source, each [Year] = 2026) in Filtered."
  },
  {
    "term": "Managed Private Endpoint",
    "definition": "A private network connection created from a Fabric workspace to an Azure data source so that traffic travels over the Microsoft backbone instead of the public internet.",
    "example": "A tenant creates a managed private endpoint from the workspace to an Azure SQL Database that blocks public access, allowing pipelines to reach it."
  },
  {
    "term": "Managed Table",
    "definition": "A lakehouse table whose data and metadata lifecycle are controlled by the lakehouse, so dropping the table also deletes the underlying files in OneLake.",
    "example": "df.write.saveAsTable(\"dim_product\") creates a managed table, and DROP TABLE dim_product removes both the metadata and the Parquet files."
  },
  {
    "term": "Many-to-Many Relationship",
    "definition": "A relationship between two tables where neither side has unique key values, implemented either directly or through a bridge table, and requiring care because it does not propagate filters like a star relationship.",
    "example": "Accounts and customers are joined through a bridge table so a customer can hold several accounts and an account can have several holders."
  },
  {
    "term": "Mark as Date Table",
    "definition": "The semantic model setting that designates a table as the model's date table using a column of unique, contiguous dates, which time intelligence functions rely on.",
    "example": "dim_date is marked as the date table on its Date column so TOTALYTD behaves correctly even when filters are applied to other date columns."
  },
  {
    "term": "Measure",
    "definition": "A DAX calculation evaluated at query time in the current filter context, stored in the model without occupying memory per row, and used to aggregate values in visuals.",
    "example": "Sales YoY % = DIVIDE([Total Sales] - [Total Sales PY], [Total Sales PY])."
  },
  {
    "term": "Medallion Architecture",
    "definition": "A layered data design pattern that progressively refines data through bronze (raw), silver (cleansed and conformed), and gold (business-ready, aggregated or dimensional) zones.",
    "example": "Raw API extracts land in bronze, a notebook deduplicates and types them into silver, and a final step builds gold star-schema tables for the semantic model."
  },
  {
    "term": "MERGE Statement",
    "definition": "The set-based upsert operation, available in Spark SQL and the Delta API, that inserts, updates, or deletes target rows based on a match condition against a source, widely used for slowly changing dimensions and change data capture.",
    "example": "MERGE INTO dim_customer USING updates ON dim_customer.CustomerId = updates.CustomerId WHEN MATCHED THEN UPDATE SET ... WHEN NOT MATCHED THEN INSERT ...."
  },
  {
    "term": "Microsoft Fabric",
    "definition": "A unified software-as-a-service (SaaS) analytics platform that brings data movement, data engineering, data warehousing, data science, real-time intelligence, and business intelligence together on a single storage foundation called OneLake.",
    "example": "Instead of provisioning a separate data lake, Synapse workspace, and Power BI service, an analytics engineer creates one Fabric workspace on an F64 capacity and builds a lakehouse, a warehouse, and reports side by side in it."
  },
  {
    "term": "Microsoft Purview",
    "definition": "The Microsoft governance suite that integrates with Fabric for data cataloging, sensitivity labeling, data loss prevention policies, and audit of activities.",
    "example": "The Purview hub in Fabric shows how much content is labeled and links to data loss prevention policy reports."
  },
  {
    "term": "Mirroring",
    "definition": "The Fabric capability that continuously replicates an external operational database, such as Azure SQL Database, Azure Cosmos DB, Snowflake, or Azure Databricks Unity Catalog, into OneLake as Delta tables with near real-time latency and no pipeline to maintain.",
    "example": "A mirrored Azure SQL Database appears in Fabric as a read-only item whose Delta tables can be joined with lakehouse data and used in Direct Lake models."
  },
  {
    "term": "Model Size Reduction",
    "definition": "The set of techniques that shrink a semantic model, including removing unused columns and tables, lowering cardinality, avoiding calculated columns, disabling auto date/time, and summarizing at a coarser grain.",
    "example": "Turning off Auto date/time removes dozens of hidden date tables from a model with many date columns."
  },
  {
    "term": "Monitoring Hub",
    "definition": "The Fabric experience that lists runs of notebooks, pipelines, dataflows, Spark jobs, and semantic model refreshes across workspaces with their status, duration, and logs.",
    "example": "An engineer opens the monitoring hub to find which pipeline run failed overnight and reads its activity-level error."
  },
  {
    "term": "Multi-Geo",
    "definition": "The configuration in which capacities in different regions hold data for different parts of an organization to satisfy data residency requirements.",
    "example": "The European business unit's workspaces are assigned to a capacity in West Europe while the Americas use East US."
  },
  {
    "term": "Naming Convention",
    "definition": "An agreed standard for naming workspaces, items, schemas, tables, columns, and measures, which makes lineage understandable and self-service safer.",
    "example": "Tables are prefixed with fact_ or dim_ and workspaces are suffixed with the environment, as in Sales [DEV]."
  },
  {
    "term": "Notebook",
    "definition": "The Fabric item that combines executable code cells in PySpark, Spark SQL, Scala, R, or Python with markdown, used for data engineering, data science, and ad hoc analysis against OneLake.",
    "example": "A notebook mounts a lakehouse as its default, reads Files/raw with spark.read, and writes a cleansed Delta table."
  },
  {
    "term": "notebookutils",
    "definition": "The Fabric-provided utility library, formerly mssparkutils, that exposes helpers for file system operations, notebook chaining, credentials, and session control from notebook code.",
    "example": "notebookutils.notebook.run(\"child_notebook\", 300, {\"date\": \"2026-09-01\"}) runs another notebook with a timeout and parameters."
  },
  {
    "term": "Object-Level Security (OLS)",
    "definition": "Security that hides entire tables or columns from members of a role, so the objects are not merely empty but invisible in the model's metadata.",
    "example": "The Salary column is hidden from the Analyst role with OLS, so reports referencing it raise an error for those users instead of showing blanks."
  },
  {
    "term": "Office and File Source Connectors",
    "definition": "Power Query and pipeline connectors for formats such as CSV, JSON, XML, Excel, and Parquet, each with parsing options for delimiters, encodings, headers, and nested structures.",
    "example": "A JSON file with nested arrays is expanded in Power Query, or read with a defined schema in Spark, before being written as a Delta table."
  },
  {
    "term": "On-Premises Data Gateway",
    "definition": "The service installed on a network-connected machine that allows Fabric to reach data sources that are not accessible from the cloud, and which is required for on-premises connections in dataflows and pipelines.",
    "example": "A gateway cluster of two machines provides highly available access to an on-premises SQL Server."
  },
  {
    "term": "OneCopy",
    "definition": "The Fabric principle that a single physical copy of data in OneLake can be read by every engine and workload without duplication, conversion, or export.",
    "example": "The same Delta table is queried by Spark in a notebook, by T-SQL through the SQL analytics endpoint, and by a Direct Lake semantic model, with no extra copies created."
  },
  {
    "term": "OneLake",
    "definition": "The single, tenant-wide, hierarchical data lake automatically provisioned with Microsoft Fabric, built on Azure Data Lake Storage Gen2 semantics, that stores all Fabric data in open Delta Parquet format and is addressable through one namespace.",
    "example": "A lakehouse table is reachable at a path such as abfss://Workspace@onelake.dfs.fabric.microsoft.com/Lakehouse.Lakehouse/Tables/Sales from Spark, from Azure Storage Explorer, or from any ADLS-compatible tool."
  },
  {
    "term": "OneLake Availability",
    "definition": "The KQL database setting that mirrors its tables into OneLake in Delta format so Spark, T-SQL, and Direct Lake models can read the same data.",
    "example": "Turning on OneLake availability lets a Direct Lake semantic model read telemetry that was ingested through an eventstream."
  },
  {
    "term": "OneLake Catalog",
    "definition": "The unified Fabric experience for discovering, exploring, and governing data items across the tenant, showing endorsement, lineage, and access information.",
    "example": "An analyst searches the OneLake catalog for a certified sales model rather than building a new one from raw tables."
  },
  {
    "term": "OneLake Data Access Role",
    "definition": "A role defined on a lakehouse that grants read access to specific folders or tables in OneLake, allowing fine-grained data-level security beyond workspace roles.",
    "example": "A data access role grants a group read access only to the Tables/sales folder, so they cannot browse the rest of the lakehouse."
  },
  {
    "term": "OneLake File Explorer",
    "definition": "A Windows application that mounts OneLake into Windows File Explorer so users can browse, upload, and download Fabric data with familiar file operations.",
    "example": "An analyst drags a CSV from their desktop into the Files area of a lakehouse using the synced OneLake folder in File Explorer."
  },
  {
    "term": "OneLake Shortcut",
    "definition": "A pointer object inside a lakehouse, warehouse, or KQL database that makes data stored elsewhere appear as if it lived locally, without copying or moving the bytes.",
    "example": "A lakehouse creates a shortcut to a folder in an Azure Data Lake Storage Gen2 account so notebooks and Direct Lake models can read that data in place."
  },
  {
    "term": "OPTIMIZE",
    "definition": "The Delta maintenance command that compacts many small files into fewer, larger files to reduce file-listing and scan overhead.",
    "example": "After thousands of streaming micro-batches, running OPTIMIZE on the table cuts query time dramatically by replacing tiny files with ~1 GB files."
  },
  {
    "term": "Optimize Write",
    "definition": "The Fabric Spark feature that adjusts the number of output files during a write so the resulting Delta files are large enough to query efficiently, reducing the need for later compaction.",
    "example": "With optimize write enabled, a load that would have produced 500 small files writes about 10 well-sized files."
  },
  {
    "term": "Paginated Report",
    "definition": "The pixel-perfect, print-oriented report type based on report definition language, suited to multi-page operational documents such as invoices and statements.",
    "example": "A monthly customer statement of 400 pages is produced as a paginated report and emailed as PDF by a subscription."
  },
  {
    "term": "Parameter Cell",
    "definition": "A notebook cell marked as the parameters cell, whose variable assignments are overridden by values passed from a pipeline Notebook activity or a notebookutils run call.",
    "example": "A cell containing load_date = \"2026-01-01\" is toggled as the parameter cell so a pipeline can pass a different date each day."
  },
  {
    "term": "Parameterization",
    "definition": "The technique of externalizing environment-specific values such as server names, paths, and dates into parameters so the same artifact runs unchanged in every environment.",
    "example": "A dataflow uses a ServerName parameter bound by a deployment rule rather than a hardcoded connection string."
  },
  {
    "term": "Parquet",
    "definition": "The open, columnar, compressed file format that physically stores data for Delta tables, enabling column pruning and efficient scans of analytical queries.",
    "example": "A query selecting two columns from a 200-column Parquet table reads only those two column chunks instead of whole rows."
  },
  {
    "term": "Partition Pruning",
    "definition": "The engine optimization that eliminates partitions from a scan based on predicates in the query, reducing the data read.",
    "example": "WHERE OrderYear = 2026 causes the engine to read only the OrderYear=2026 folder of a partitioned Delta table."
  },
  {
    "term": "Partitioning",
    "definition": "Physically dividing a table's files into folders by the values of one or more low-cardinality columns so queries that filter on those columns can skip entire folders.",
    "example": "A fact table partitioned by Year and Month lets a query for one month read a single folder instead of the whole table."
  },
  {
    "term": "Performance Analyzer",
    "definition": "The Power BI Desktop pane that records how long each visual takes to render, split into DAX query, visual display, and other time, and exposes the generated DAX query.",
    "example": "A recording shows one matrix consuming four seconds of DAX query time while all other visuals are under 100 milliseconds."
  },
  {
    "term": "Perspective",
    "definition": "A defined subset of a semantic model's tables, columns, and measures presented to users, typically used with personalized visuals to reduce clutter; it is a usability feature, not a security boundary.",
    "example": "A Finance perspective exposes only the finance measures, while object-level security, not the perspective, prevents access to restricted columns."
  },
  {
    "term": "Pipeline Parameter",
    "definition": "A value defined on a pipeline and supplied at run time, allowing the same pipeline to serve different sources, environments, or date ranges.",
    "example": "A pipeline takes a sourceSchema parameter so the same definition can load data from the sales and finance schemas."
  },
  {
    "term": "Pipeline Variable",
    "definition": "A mutable value scoped to a single pipeline run, set with the Set variable or Append variable activity, used to accumulate or carry state between activities.",
    "example": "An Append variable activity collects the names of failed tables inside a ForEach loop so a final activity can report them."
  },
  {
    "term": "Pivot and Unpivot",
    "definition": "Transformations that rotate data between wide and tall shapes; pivot turns row values into columns, while unpivot turns columns into attribute-value rows.",
    "example": "Twelve monthly amount columns are unpivoted into Month and Amount columns so the fact table has a proper grain."
  },
  {
    "term": "Power BI Report",
    "definition": "The interactive Fabric item, built in Power BI Desktop or the service, that visualizes data from a semantic model through pages of visuals, filters, and interactions.",
    "example": "A sales report with a matrix, a map, and slicers connects live to the certified sales semantic model."
  },
  {
    "term": "Power Query",
    "definition": "The data connectivity and transformation engine, driven by the M language, used by Dataflow Gen2, Power BI Desktop, and Excel to shape data through a sequence of applied steps.",
    "example": "Steps such as Removed columns, Filtered rows, and Merged queries are recorded in order and can be reviewed in the Applied steps pane."
  },
  {
    "term": "Pull Request",
    "definition": "The Git process of proposing a branch's changes for review and merge into another branch, which is how Fabric content changes are reviewed when Git integration is used.",
    "example": "The reviewer inspects a TMDL diff showing a new measure before approving the merge into main."
  },
  {
    "term": "Query Caching",
    "definition": "Capability-level caching of report query results for imported semantic models, which improves the experience for frequently opened reports at the cost of memory.",
    "example": "Query caching is enabled on an executive model whose refresh happens once a day."
  },
  {
    "term": "Query Folding",
    "definition": "The Power Query behavior of translating transformation steps into a single native query executed by the source system, so filtering and aggregation happen at the source instead of in the mashup engine.",
    "example": "Filtering rows and removing columns against a SQL database folds into one SELECT with a WHERE clause, which is far faster than downloading the whole table."
  },
  {
    "term": "Query Insights",
    "definition": "The set of system views in a Fabric warehouse, such as queryinsights.exec_requests_history, that expose completed and long-running query history for performance troubleshooting.",
    "example": "A query against exec_requests_history finds the ten slowest statements of the last day and who ran them."
  },
  {
    "term": "RangeStart and RangeEnd",
    "definition": "The two reserved date/time parameters a Power Query query must filter on so an incremental refresh policy can generate partitions and fold the filter to the source.",
    "example": "The fact query filters OrderDate >= RangeStart and OrderDate < RangeEnd before the policy is configured."
  },
  {
    "term": "Real-Time Hub",
    "definition": "The central Fabric catalog of streaming data sources and events, where users discover eventstreams, Azure event sources, and Fabric system events and connect them to destinations.",
    "example": "A developer browses the Real-Time hub to find an existing telemetry stream instead of creating a duplicate eventstream."
  },
  {
    "term": "Reconciliation",
    "definition": "The comparison of aggregated results between layers or systems to prove that a transformation preserved the expected totals.",
    "example": "Bronze row counts and silver row counts plus rejected rows are compared daily to confirm nothing was silently lost."
  },
  {
    "term": "Relationship Cardinality",
    "definition": "The characterization of a model relationship as one-to-many, one-to-one, many-to-one, or many-to-many, which determines how filters propagate and how the engine can optimize joins.",
    "example": "dim_product to fact_sales is one-to-many from the dimension side, the recommended shape for a star schema."
  },
  {
    "term": "Report-Level Measure",
    "definition": "A measure defined in a report connected live to a semantic model, which is visible only in that report and therefore duplicates logic if widely reused.",
    "example": "An analyst creates a quick ratio as a report-level measure and later asks the model owner to promote it into the shared model."
  },
  {
    "term": "Result Set Caching",
    "definition": "The warehouse feature that stores the results of eligible queries so repeated identical queries are answered without re-reading data.",
    "example": "A report page refreshed by many users hits the cached result and returns in milliseconds."
  },
  {
    "term": "Retry and Timeout Policy",
    "definition": "Activity-level settings that define how many times a failed activity is retried, the interval between attempts, and the maximum duration before it is abandoned.",
    "example": "A Copy activity against a flaky API is configured with three retries at 60-second intervals."
  },
  {
    "term": "Row Context",
    "definition": "The evaluation context that exists when iterating a table row by row, as in calculated columns and iterator functions, giving access to the current row's column values.",
    "example": "Inside SUMX(fact_sales, fact_sales[Quantity] * fact_sales[Price]) a row context supplies each row's quantity and price."
  },
  {
    "term": "Row-Level Security (RLS)",
    "definition": "Security defined in a semantic model as roles containing DAX filter expressions on tables, so members of a role see only the rows that satisfy those filters.",
    "example": "A Sales Region role filters dim_region with [Region] = \"EMEA\", and members of that role see only EMEA data in every report."
  },
  {
    "term": "Scheduled Refresh",
    "definition": "The configuration that runs a semantic model or dataflow refresh at defined times and time zone, with failure notifications to owners or specified recipients.",
    "example": "A model is scheduled to refresh at 05:00 and 13:00, with alerts sent to the data platform mailbox on failure."
  },
  {
    "term": "Scheduler",
    "definition": "The per-item Fabric setting that defines when a pipeline, notebook, dataflow, or semantic model refresh runs automatically, independently of orchestration inside a pipeline.",
    "example": "Rather than scheduling three items separately, the team schedules only the master pipeline that invokes them in order."
  },
  {
    "term": "Schema Drift",
    "definition": "The appearance of new, removed, or retyped columns in source data over time, which downstream ingestion must detect and handle rather than fail on silently.",
    "example": "A bronze notebook uses mergeSchema so an added source column is absorbed instead of breaking the load."
  },
  {
    "term": "Schema Enforcement",
    "definition": "The Delta Lake behavior of rejecting writes whose schema does not match the table, protecting downstream consumers from accidental corruption.",
    "example": "Appending a dataframe with a mistyped column fails until overwriteSchema or mergeSchema is deliberately specified."
  },
  {
    "term": "Schema-Enabled Lakehouse",
    "definition": "A lakehouse created with the schemas feature turned on, allowing tables to be organized into multiple schemas rather than only the default dbo schema.",
    "example": "A team groups bronze, silver, and gold tables into separate schemas inside one schema-enabled lakehouse instead of creating three lakehouses."
  },
  {
    "term": "Semantic Link",
    "definition": "The Fabric feature, used through the SemPy Python library, that connects semantic models to notebooks so models can be read as dataframes, queried with DAX, and validated.",
    "example": "A notebook calls sempy.fabric.evaluate_dax to compare a measure's output against the warehouse as an automated test."
  },
  {
    "term": "Semantic Model",
    "definition": "The Fabric and Power BI item, formerly called a dataset, that contains tables, relationships, calculations, hierarchies, security rules, and a storage mode, and serves as the analytical layer reports query with DAX.",
    "example": "A semantic model built on gold lakehouse tables defines relationships, a date table, and measures such as Total Sales that many reports reuse."
  },
  {
    "term": "Semantic Model Refresh",
    "definition": "The operation that loads or reloads data and recalculates model objects; for Import models it re-reads sources, while for Direct Lake models it reframes to the newest Delta version.",
    "example": "A pipeline's Semantic model refresh activity runs after the gold layer load so reports show today's figures."
  },
  {
    "term": "Semantic Model Versioning",
    "definition": "The practice of tracking model metadata changes over time in source control so changes are reviewable and reversible, enabled in Fabric by Git integration and TMDL.",
    "example": "A regression in a measure is diagnosed by comparing two commits of the model's TMDL definition."
  },
  {
    "term": "Sensitivity Label",
    "definition": "A Microsoft Purview Information Protection classification applied to Fabric items that carries protection policies and flows downstream to derived items and exported files.",
    "example": "A Highly Confidential label applied to a semantic model is inherited by a report built on it and by an Excel export of that report."
  },
  {
    "term": "Service Principal",
    "definition": "A non-interactive Microsoft Entra identity used by automation to authenticate to Fabric APIs, refresh items, and deploy content, subject to the relevant tenant settings.",
    "example": "A release pipeline authenticates as a service principal that holds the Member role in the target workspace."
  },
  {
    "term": "Shared Semantic Model",
    "definition": "A published semantic model reused by many reports and workspaces, which requires Build permission for consumers and is the foundation of a managed self-service approach.",
    "example": "Analysts are granted Build permission on the finance model so they can create their own reports without copying data."
  },
  {
    "term": "Shortcut versus Copy",
    "definition": "The architectural choice between referencing data in place with a shortcut and physically duplicating it with a copy activity or mirroring, trading freshness and storage against isolation and source load.",
    "example": "A team shortcuts to a partner lakehouse's certified gold tables rather than scheduling a nightly copy that would duplicate 2 TB."
  },
  {
    "term": "Shuffle",
    "definition": "The redistribution of data across Spark executors required by wide operations such as joins, groupBy, and repartition, and a common source of slow jobs.",
    "example": "Broadcasting a small dimension table avoids a shuffle when joining it to a large fact table."
  },
  {
    "term": "Silver Layer",
    "definition": "The cleansed and integrated layer of a medallion architecture, where data is deduplicated, conformed, typed, and joined into an enterprise view.",
    "example": "Customer records from three source systems are matched and standardized into one silver customer table."
  },
  {
    "term": "Slowly Changing Dimension (SCD)",
    "definition": "A pattern for handling changes to dimension attributes over time; type 1 overwrites the old value, while type 2 adds a new row with validity dates so history is preserved.",
    "example": "A customer moving city gets a new type 2 row with a start date, an end date on the prior row, and an IsCurrent flag."
  },
  {
    "term": "Small File Problem",
    "definition": "The performance degradation caused by a table consisting of very many tiny files, which forces engines to spend more time listing and opening files than reading data.",
    "example": "A pipeline appending one file per minute creates 1,440 files a day, and query times fall sharply only after OPTIMIZE compacts them."
  },
  {
    "term": "Smoothing",
    "definition": "The mechanism that spreads the capacity units consumed by an operation across a future time window, so short spikes do not immediately exhaust the capacity; background operations are smoothed over 24 hours and interactive operations over a few minutes.",
    "example": "An overnight dataflow refresh that bursts heavily is smoothed over the next 24 hours, which prevents the morning report users from being throttled by that one refresh."
  },
  {
    "term": "Snowflake Schema",
    "definition": "A dimensional pattern in which dimensions are normalized into multiple related tables, which increases the number of relationships a semantic model must traverse and generally performs worse than a star schema.",
    "example": "Splitting product, subcategory, and category into three tables creates a snowflake that is usually flattened into one dimension for Power BI."
  },
  {
    "term": "Software as a Service (SaaS) Analytics",
    "definition": "A delivery model in which the analytics platform, its compute engines, and its storage are fully managed by the vendor, so customers consume capabilities rather than installing and patching infrastructure.",
    "example": "In Fabric there are no Spark clusters, SQL servers, or storage accounts to create; a user assigns a capacity to a workspace and the Spark, SQL, and Analysis Services engines are already running behind the scenes."
  },
  {
    "term": "Spark Configuration",
    "definition": "The set of key-value properties, such as spark.sql.shuffle.partitions or spark.microsoft.delta.optimizeWrite.enabled, that tune Spark behavior at session, notebook, or environment level.",
    "example": "An environment sets optimizeWrite so writes produce fewer, larger files automatically."
  },
  {
    "term": "Spark Environment",
    "definition": "The Fabric item that packages Spark runtime version, Spark properties, public libraries, and custom libraries so notebooks and Spark job definitions attached to it run with reproducible settings.",
    "example": "An environment pins Spark runtime 1.3 and installs a specific version of a Python package, and every notebook in the project attaches to it."
  },
  {
    "term": "Spark Job Definition",
    "definition": "The Fabric item that submits a compiled or scripted Spark application, such as a JAR or a Python file with arguments, as a batch job rather than an interactive notebook.",
    "example": "A production ETL written as a packaged PySpark file is scheduled as a Spark job definition instead of being pasted into a notebook."
  },
  {
    "term": "Spark UI",
    "definition": "The Apache Spark diagnostic interface, reachable from a notebook run or the monitoring hub, that shows jobs, stages, tasks, and shuffle statistics for tuning distributed code.",
    "example": "The stage view reveals heavy data skew where one task processes far more rows than the others."
  },
  {
    "term": "SQL Analytics Endpoint",
    "definition": "The automatically provisioned, read-only T-SQL interface over a lakehouse's Delta tables that supports SELECT queries, views, functions, and security objects but cannot insert, update, or delete data.",
    "example": "An analyst connects SQL Server Management Studio to the lakehouse SQL analytics endpoint and creates a view joining two Delta tables, but any INSERT statement fails."
  },
  {
    "term": "SQL Analytics Endpoint Metadata Sync",
    "definition": "The background process that keeps the SQL analytics endpoint's table metadata aligned with the underlying Delta tables, and which can briefly lag after a table is created or altered.",
    "example": "A newly created Delta table does not appear in the endpoint for a few moments until the sync completes or is refreshed manually."
  },
  {
    "term": "SQL Query Editor",
    "definition": "The browser-based T-SQL editor in Fabric for warehouses and SQL analytics endpoints, offering IntelliSense, results grids, and the ability to save queries as items.",
    "example": "A developer prototypes a CTAS statement in the SQL query editor before moving it into a stored procedure."
  },
  {
    "term": "SQL Row-Level Security",
    "definition": "T-SQL security in a warehouse or SQL analytics endpoint that uses an inline table-valued predicate function and a security policy to filter rows per user at the engine level.",
    "example": "CREATE SECURITY POLICY with ADD FILTER PREDICATE dbo.fn_securitypredicate(SalesRep) ON dbo.Sales restricts each representative to their own rows."
  },
  {
    "term": "Staging (Dataflow Gen2)",
    "definition": "The Dataflow Gen2 setting that first loads a query's output into internal Fabric storage before writing it to the destination, enabling compute pushdown for downstream queries but adding a write step.",
    "example": "Staging is disabled on a simple query that folds completely to a warehouse destination, to avoid an unnecessary intermediate write."
  },
  {
    "term": "Star Schema",
    "definition": "A dimensional modeling pattern with a central fact table containing measures and foreign keys, surrounded by denormalized dimension tables, which is the recommended shape for Power BI semantic models.",
    "example": "fact_sales joins to dim_date, dim_product, dim_customer, and dim_store by single-column surrogate keys."
  },
  {
    "term": "Starter Pool",
    "definition": "The pre-warmed, Microsoft-managed Spark pool that gives notebooks a session in a few seconds using default node sizes, so no cluster has to be created.",
    "example": "An interactive exploration notebook attaches to the starter pool and begins running cells almost immediately."
  },
  {
    "term": "Storage Engine and Formula Engine",
    "definition": "The two components that execute a DAX query, where the multi-threaded, cache-friendly storage engine scans compressed data and the single-threaded formula engine performs logic the storage engine cannot.",
    "example": "Rewriting a measure so that the work happens in the storage engine reduces a query from seconds to milliseconds."
  },
  {
    "term": "Stored Procedure",
    "definition": "A named, parameterized T-SQL program stored in a warehouse and executed on demand or from a pipeline, used to encapsulate multi-statement transformation logic.",
    "example": "A pipeline's Stored procedure activity calls dbo.usp_load_fact_sales with a load date parameter."
  },
  {
    "term": "Structured Streaming",
    "definition": "The Spark API that processes data as an unbounded table in micro-batches, with checkpointing for exactly-once progress tracking, used in Fabric for continuous ingestion into Delta tables.",
    "example": "readStream on a lakehouse folder with writeStream to a Delta table continuously loads newly arriving files."
  },
  {
    "term": "Subscription",
    "definition": "The Power BI feature that emails a report page or paginated report on a schedule to specified recipients as an image or attachment.",
    "example": "Executives receive a PDF of the sales summary every Monday at 07:00 by subscription."
  },
  {
    "term": "SUMMARIZECOLUMNS",
    "definition": "The DAX query function that groups by given columns, applies filters, and evaluates measures, and which the Power BI engine itself generates for most visuals.",
    "example": "EVALUATE SUMMARIZECOLUMNS(dim_product[Category], \"Sales\", [Total Sales]) reproduces a visual's query in DAX query view."
  },
  {
    "term": "Surrogate Key",
    "definition": "A system-generated, meaningless integer key used as the primary key of a dimension and as the foreign key in facts, insulating the model from changes in source business keys.",
    "example": "dim_customer has a CustomerKey identity column, while the source CRM identifier is retained only as a business key attribute."
  },
  {
    "term": "Table Constraint in Fabric Warehouse",
    "definition": "Primary key, foreign key, and unique constraints that can be declared in a Fabric warehouse only as NOT ENFORCED, serving as optimizer and modeling hints rather than as data validation.",
    "example": "A primary key is declared NOT ENFORCED on the dimension, so duplicate keys must still be prevented by the load process."
  },
  {
    "term": "Table Format Versioning",
    "definition": "The Delta protocol reader and writer versions and table features that determine which engines can read or write a table, which matters when several Fabric engines and external tools share data.",
    "example": "Enabling a newer table feature makes the table unreadable by an older external reader, so the team checks compatibility first."
  },
  {
    "term": "Table Maintenance",
    "definition": "The lakehouse feature that runs OPTIMIZE, V-Order, and VACUUM on a Delta table from the user interface or on a schedule, without writing Spark code.",
    "example": "An engineer right-clicks a table in the lakehouse explorer, chooses Maintenance, and selects both file compaction with V-Order and VACUUM."
  },
  {
    "term": "Tabular Editor",
    "definition": "A third-party tool for editing semantic model metadata offline or through the XMLA endpoint, supporting scripting, calculation groups, perspectives, and the Best Practice Analyzer.",
    "example": "A modeler uses a C# script in Tabular Editor to hide every key column in the model at once."
  },
  {
    "term": "Tabular Model Definition Language (TMDL)",
    "definition": "The text-based, human-readable format for semantic model metadata that is friendly to source control, code review, and scripted edits.",
    "example": "A semantic model committed to Git through TMDL view shows a clean diff when a measure expression changes."
  },
  {
    "term": "Tenant Setting",
    "definition": "A Fabric administration switch, managed in the admin portal and often scoped to security groups, that enables or disables capabilities such as Git integration, external data sharing, or service principal access to APIs.",
    "example": "A Fabric administrator enables the Service principals can use Fabric APIs setting for one security group so an automation pipeline can deploy content."
  },
  {
    "term": "Testing Analytics Content",
    "definition": "The verification of data and logic through row counts, reconciliation against sources, DAX query assertions, and semantic link based notebook tests before content is promoted.",
    "example": "A test notebook compares the model's Total Sales measure with a T-SQL sum from the warehouse and fails the release if they differ."
  },
  {
    "term": "Throttling",
    "definition": "The progressive protection applied when a capacity's smoothed future consumption exceeds what it has been sold, starting with interactive delays, escalating to interactive rejection, and finally to background rejection.",
    "example": "After days of overspending on an F2 capacity, report visuals start returning throttling errors and eventually scheduled refreshes are rejected until the capacity is scaled up or consumption drops."
  },
  {
    "term": "Time Intelligence",
    "definition": "The family of DAX functions that shift or expand date filters to compute year-to-date, prior period, and moving totals, requiring a marked date table with contiguous dates.",
    "example": "Sales YTD = TOTALYTD([Total Sales], dim_date[Date])."
  },
  {
    "term": "Time Travel",
    "definition": "The Delta Lake capability to query an earlier version of a table by version number or timestamp, as long as the required files have not been removed by VACUUM.",
    "example": "SELECT * FROM sales TIMESTAMP AS OF '2026-09-01' reproduces the month-end figures for an audit."
  },
  {
    "term": "Transcoding",
    "definition": "The on-demand conversion of Delta Parquet column segments into the in-memory VertiPaq format performed by Direct Lake when a column is first needed.",
    "example": "The first report query on a rarely used column is slower because that column must be transcoded before it is cached in memory."
  },
  {
    "term": "Trusted Workspace Access",
    "definition": "A Fabric security feature that lets a workspace with a workspace identity connect to firewall-enabled Azure Data Lake Storage Gen2 accounts through resource instance rules, so shortcuts and pipelines work without opening the storage account to all networks.",
    "example": "A shortcut to a locked-down storage account succeeds because the workspace identity was authorized on the account through a resource instance rule."
  },
  {
    "term": "User-Defined Aggregation",
    "definition": "The manual configuration of an aggregation table's mappings, precedence, and summarization functions so the engine knows which detail columns and measures it can satisfy.",
    "example": "The Manage aggregations dialog maps SalesAgg.SalesAmount as Sum of Sales.SalesAmount and SalesAgg.ProductKey as GroupBy."
  },
  {
    "term": "USERELATIONSHIP",
    "definition": "A CALCULATE modifier that activates an inactive relationship for the duration of the calculation, typically used for role-playing dimensions.",
    "example": "Shipped Sales = CALCULATE([Total Sales], USERELATIONSHIP(fact_sales[ShipDateKey], dim_date[DateKey]))."
  },
  {
    "term": "USERPRINCIPALNAME",
    "definition": "The DAX function that returns the user principal name of the user querying the model, forming the basis of dynamic row-level security.",
    "example": "A security table is filtered with [UPN] = USERPRINCIPALNAME() and propagates through relationships to the fact table."
  },
  {
    "term": "V-Order",
    "definition": "A Microsoft write-time optimization for Parquet files that applies sorting, row group distribution, dictionary encoding, and compression so that Fabric engines, especially Direct Lake and the warehouse, read the data faster.",
    "example": "Gold tables serving Direct Lake semantic models are written with V-Order enabled, while a high-volume write-heavy bronze table has V-Order disabled to speed up ingestion."
  },
  {
    "term": "VACUUM",
    "definition": "The Delta maintenance command that permanently deletes data files no longer referenced by the current table version and older than a retention threshold, reclaiming storage but shortening the time travel window.",
    "example": "VACUUM with a seven-day retention removes stale files after compaction, which also means versions older than seven days can no longer be queried."
  },
  {
    "term": "Variables (VAR)",
    "definition": "Named expressions inside a DAX formula that are evaluated once in the context where they are declared, improving readability and avoiding repeated evaluation.",
    "example": "VAR Curr = [Total Sales] VAR Prev = CALCULATE([Total Sales], DATEADD(dim_date[Date], -1, YEAR)) RETURN DIVIDE(Curr - Prev, Prev)."
  },
  {
    "term": "VertiPaq",
    "definition": "The in-memory, columnar, compressed storage engine of Analysis Services and Power BI that stores imported and transcoded data using dictionary and run-length encoding.",
    "example": "A column with only five distinct values compresses extremely well in VertiPaq, while a high-cardinality key column dominates model size."
  },
  {
    "term": "VertiPaq Analyzer",
    "definition": "The analysis capability, available in DAX Studio and Tabular Editor, that reports table and column sizes, cardinality, and compression so modelers can find what is consuming memory.",
    "example": "It reveals that a transaction identifier column accounts for 60 percent of model size, prompting its removal."
  },
  {
    "term": "View",
    "definition": "A saved SELECT statement that behaves like a table for consumers, used to hide complexity, enforce column selection, or present business-friendly names.",
    "example": "A view exposes only non-sensitive columns of the employee table to the reporting role."
  },
  {
    "term": "View Native Query",
    "definition": "The Power Query diagnostic option that displays the source query generated for a step, which is available only while folding is still occurring and is therefore used to find where folding breaks.",
    "example": "The option is greyed out on the step after a custom function is applied, revealing that folding stopped at that point."
  },
  {
    "term": "Visual Query Editor",
    "definition": "The drag-and-drop, Power Query-style diagram interface in a warehouse or SQL analytics endpoint that builds queries without writing T-SQL and can save the result as a view.",
    "example": "An analyst joins two tables and filters rows visually, then saves the result as a view for reuse."
  },
  {
    "term": "VNet Data Gateway",
    "definition": "A managed gateway that runs inside a virtual network so Fabric can reach data sources that are restricted to that network without installing software.",
    "example": "A VNet data gateway lets a dataflow read an Azure SQL Managed Instance that has no public endpoint."
  },
  {
    "term": "Warehouse Statistics",
    "definition": "The metadata describing column value distribution that the warehouse query optimizer uses to choose plans, created automatically or maintained manually with CREATE and UPDATE STATISTICS.",
    "example": "After a large load, UPDATE STATISTICS on the join columns restores good plan choices."
  },
  {
    "term": "Warehouse versus Lakehouse",
    "definition": "The design choice between a read-write T-SQL warehouse and a Spark-first lakehouse with a read-only SQL endpoint; warehouses suit SQL-based transformation and full DML, while lakehouses suit file-based and Spark or Python transformation.",
    "example": "A team whose engineers know only T-SQL builds its silver and gold layers in a warehouse, while a team of Spark developers builds them in a lakehouse."
  },
  {
    "term": "Watermark",
    "definition": "A stored high-water mark, usually a timestamp or incrementing identifier, that records how far a previous load progressed so the next load reads only newer rows.",
    "example": "A control table holds LastLoadedOn per source table, and a Lookup activity passes it into the Copy activity's query."
  },
  {
    "term": "Window Function",
    "definition": "A SQL or Spark function such as ROW_NUMBER, RANK, LAG, or SUM OVER that computes values across a set of rows related to the current row without collapsing the result set.",
    "example": "LAG(Amount) OVER (PARTITION BY CustomerId ORDER BY OrderDate) gives each order the previous order's amount."
  },
  {
    "term": "Workspace",
    "definition": "The collaboration container in Fabric that holds items such as lakehouses, warehouses, notebooks, pipelines, semantic models, and reports, and to which a capacity, roles, Git integration, and settings are assigned.",
    "example": "A team keeps separate Development, Test, and Production workspaces and connects them with a deployment pipeline."
  },
  {
    "term": "Workspace Admin Role",
    "definition": "The highest workspace role, which can do everything a Member can do plus delete the workspace, change its capacity assignment, update workspace settings, and add or remove users in any role, including other admins.",
    "example": "Only the analytics platform owners hold the Admin role, because it is the role required to reassign the workspace to a different Fabric capacity."
  },
  {
    "term": "Workspace Contributor Role",
    "definition": "A workspace role that can create, edit, and delete items and run jobs such as notebooks and pipelines, but cannot manage workspace access or share items with others.",
    "example": "Developers are given Contributor so they can publish reports and build lakehouse tables while access management stays with admins."
  },
  {
    "term": "Workspace Identity",
    "definition": "A managed service principal automatically associated with a Fabric workspace that can be authorized on Azure resources, enabling trusted workspace access and secure, credential-free connections.",
    "example": "An admin creates the workspace identity, grants it Storage Blob Data Reader on an ADLS Gen2 account, and shortcuts then authenticate as the workspace itself."
  },
  {
    "term": "Workspace Member Role",
    "definition": "A workspace role that can add other users up to the Member level, share items, and create, edit, and delete content, but cannot delete the workspace or change its capacity.",
    "example": "A lead analyst is granted Member so they can re-share a semantic model with a partner team without involving an administrator."
  },
  {
    "term": "Workspace Role",
    "definition": "One of the four built-in permission sets assigned to users, groups, or service principals at the workspace level: Admin, Member, Contributor, and Viewer, each granting a fixed bundle of rights over every item in the workspace.",
    "example": "A data engineer is added as a Contributor so they can create and run notebooks, while business analysts are added as Viewers so they can read reports without editing items."
  },
  {
    "term": "Workspace Viewer Role",
    "definition": "The read-only workspace role that lets a user view reports, dashboards, and other items and query data through the SQL analytics endpoint, but never write data or create items.",
    "example": "Finance business users get Viewer on the reporting workspace so they can open reports but cannot modify the underlying warehouse."
  },
  {
    "term": "XMLA Endpoint",
    "definition": "The read-write Analysis Services protocol endpoint of a Fabric or Premium workspace that allows external tools to query, edit, refresh, and deploy semantic models.",
    "example": "Tabular Editor connects over the XMLA endpoint to add calculation groups that the Power BI Desktop interface does not expose."
  },
  {
    "term": "Z-Order",
    "definition": "An optional clause of OPTIMIZE that co-locates related values of chosen columns in the same files, improving data skipping for queries filtering on those columns.",
    "example": "OPTIMIZE sales ZORDER BY (CustomerId) makes point lookups by customer read far fewer files."
  },
  {
    "term": "Zero-Copy Clone",
    "definition": "The Fabric warehouse feature that creates a new table sharing the source table's existing data files at a point in time, so the clone is created almost instantly and consumes no extra storage until changed.",
    "example": "CREATE TABLE dbo.Sales_Test AS CLONE OF dbo.Sales gives testers a full copy of production data without duplicating it."
  }
]

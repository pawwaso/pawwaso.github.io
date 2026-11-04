window.questions = [
  {
    "id": 1,
    "question": "Your company is starting to use Microsoft Fabric. The data platform team asks whether they must provision a storage account before workspaces can store lakehouse and warehouse data. Which statement should you give them?",
    "options": [
      "a) OneLake is a virtual layer that requires an existing Azure Data Lake Storage Gen2 account to hold the data",
      "b) Each workspace gets its own isolated OneLake instance that must be provisioned manually",
      "c) Every Fabric tenant has exactly one OneLake, provisioned automatically, that stores data for all workspaces",
      "d) OneLake is an optional add-on that must be purchased separately from a Fabric capacity"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. OneLake is built on Azure Data Lake Storage Gen2 technology but does not require a customer-owned storage account.",
      "b": "Is not correct. Workspaces are folders within the single tenant-wide OneLake, not separate lakes, and nothing has to be provisioned.",
      "c": "Is correct. OneLake is automatically provisioned once per tenant and acts as the single storage foundation for every workspace and item.",
      "d": "Is not correct. OneLake is included with Fabric and is not licensed separately from capacity."
    }
  },
  {
    "id": 2,
    "question": "A company buys an F64 Fabric capacity. Which statement about the capacity is TRUE?",
    "options": [
      "a) The capacity must be re-created to change its size, which requires moving all items to a new workspace",
      "b) The capacity can be paused and resumed, and its compute is shared by all workloads in the assigned workspaces",
      "c) The capacity is dedicated to Power BI workloads and a separate capacity is required for Spark",
      "d) The capacity applies to a single workspace only and cannot be shared"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Scaling an F SKU up or down is done in place with no content migration.",
      "b": "Is correct. An F SKU can be paused, resumed, and scaled, and its capacity units are shared by Spark, warehouse, dataflow, and semantic model workloads across all assigned workspaces.",
      "c": "Is not correct. One Fabric capacity powers every Fabric workload, including Spark and warehouse.",
      "d": "Is not correct. Many workspaces can be assigned to the same capacity."
    }
  },
  {
    "id": 3,
    "question": "An overnight Spark job on an F8 capacity briefly consumes far more compute than the capacity nominally provides, and the extra usage is charged over the following 24 hours. Which two capacity behaviors are being described?",
    "options": [
      "a) Throttling and rejection",
      "b) Bursting and smoothing",
      "c) Autoscale and reserved instances",
      "d) Pausing and resuming"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Throttling and rejection are the consequences of sustained overconsumption, not the mechanism that allowed the job to run faster.",
      "b": "Is correct. Bursting lets an operation exceed the nominal capacity size, and smoothing spreads the consumed capacity units over a future window, which is 24 hours for background operations.",
      "c": "Is not correct. Autoscale and reserved instances are Azure purchasing and scaling concepts, not the Fabric compute behaviors described.",
      "d": "Is not correct. Pausing and resuming stop and restart billing for the whole capacity."
    }
  },
  {
    "id": 4,
    "question": "Users report that report visuals return errors and scheduled refreshes are being rejected on a heavily used F2 capacity. Which tool should be used FIRST to identify the items responsible?",
    "options": [
      "a) The workspace lineage view",
      "b) Microsoft Purview audit logs",
      "c) The Fabric Capacity Metrics app",
      "d) The Monitoring hub filtered to failed runs"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Lineage shows item dependencies, not compute consumption.",
      "b": "Is not correct. Audit logs record user activities for compliance rather than capacity performance.",
      "c": "Is correct. The Fabric Capacity Metrics app reports capacity unit consumption, overload and throttling periods, and the specific operations and items that caused the load.",
      "d": "Is not correct. The Monitoring hub shows individual run status but does not attribute capacity unit consumption or show overload and throttling windows."
    }
  },
  {
    "id": 5,
    "question": "You must let a developer create and run notebooks and publish reports in a workspace, but they must NOT be able to add other users or reassign the workspace to another capacity. Which workspace role should you assign?",
    "options": [
      "a) Viewer",
      "b) Contributor",
      "c) Admin",
      "d) Member"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Viewer is read-only and cannot create or run items.",
      "b": "Is correct. Contributor can create, edit, delete, and run items but cannot manage workspace access or capacity.",
      "c": "Is not correct. Admin can also change capacity assignment and delete the workspace.",
      "d": "Is not correct. Member can add other users and share items, which exceeds the requirement."
    }
  },
  {
    "id": 6,
    "question": "Which action requires the workspace Admin role and CANNOT be performed by a workspace Member?",
    "options": [
      "a) Sharing a semantic model with a colleague",
      "b) Reassigning the workspace to a different Fabric capacity",
      "c) Creating a lakehouse and loading tables into it",
      "d) Publishing a Power BI report from Power BI Desktop"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Members are able to share items and add users up to the Member level.",
      "b": "Is correct. Changing the capacity assignment, like deleting the workspace, is reserved for the Admin role.",
      "c": "Is not correct. Contributors and above can create lakehouses and load data.",
      "d": "Is not correct. Contributors and above can publish reports."
    }
  },
  {
    "id": 7,
    "question": "A business analyst must be able to query lakehouse tables with T-SQL and open existing reports, but must never create or modify items in the workspace. What is the MOST appropriate configuration?",
    "options": [
      "a) Add the user to the capacity as a capacity administrator",
      "b) Grant the Contributor role and remove write permission on the lakehouse",
      "c) Grant the Member role and rely on sensitivity labels to block edits",
      "d) Grant the Viewer role on the workspace"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Capacity administration is an infrastructure role and grants no content access by itself.",
      "b": "Is not correct. Contributor grants create and edit rights on all items and cannot be reduced per item in that way.",
      "c": "Is not correct. Member grants full authoring rights, and sensitivity labels classify and protect data rather than control item editing.",
      "d": "Is correct. Viewer grants read access to items and the ability to query data through the SQL analytics endpoint without any authoring rights."
    }
  },
  {
    "id": 8,
    "question": "Which Fabric feature groups related workspaces so that a federated set of owners can apply governance and branding to their own area of the business?",
    "options": [
      "a) Domains",
      "b) Deployment pipelines",
      "c) Capacity pools",
      "d) Workspace apps"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. Domains group workspaces for data mesh style federated governance, with domain admins and domain-level settings.",
      "b": "Is not correct. Deployment pipelines move content between stages of a release process.",
      "c": "Is not correct. There is no Fabric object called a capacity pool that groups workspaces for governance.",
      "d": "Is not correct. Apps package reports for distribution to consumers."
    }
  },
  {
    "id": 9,
    "question": "An organization wants only a small review board to be able to mark semantic models as Certified. What must be done?",
    "options": [
      "a) Each workspace admin must grant the Certify permission on their workspace",
      "b) A Fabric administrator must specify the security group allowed to certify content in the tenant settings",
      "c) The review board must be given the Master data endorsement role in Purview",
      "d) Certification is automatic once a model passes the Best Practice Analyzer"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. There is no per-workspace Certify permission; workspace owners can only promote.",
      "b": "Is correct. Certification is controlled by a tenant setting in which a Fabric administrator names the security groups allowed to certify.",
      "c": "Is not correct. Master data is an endorsement level for items, not a role for people.",
      "d": "Is not correct. Endorsement is a human governance decision, not an automated result of a rules scan."
    }
  },
  {
    "id": 10,
    "question": "You manage a workspace that contains a semantic model named Sales. You have Write permission on Sales, but you are not in any security group named in the endorsement tenant settings. You want to signal to report authors that Sales is ready for reuse. Which endorsement can you apply, and why?",
    "options": [
      "a) Certified, because Write permission on the item is sufficient to certify it",
      "b) Promoted, but it will be visible only to members of the workspace",
      "c) Promoted, because any user with write permission on an item can promote it, while certification is limited to tenant-designated reviewers",
      "d) Certified, but it will make the model read-only for other authors"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Certification requires membership in a security group that a Fabric administrator authorizes in the tenant settings; write permission alone is not enough.",
      "b": "Is not correct. Endorsement is a trust and discoverability signal and does not limit visibility to workspace members.",
      "c": "Is correct. Any user with write permission on an item can promote it, while certification is restricted to reviewers designated in the tenant settings.",
      "d": "Is not correct. Endorsement does not change permissions on the item."
    }
  },
  {
    "id": 11,
    "question": "Before renaming a column in a widely used semantic model, you want to know which reports will break and notify their owners. Which Fabric feature should you use?",
    "options": [
      "a) Data Wrangler",
      "b) Impact analysis",
      "c) Deployment pipeline comparison",
      "d) The Capacity Metrics app"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data Wrangler is a notebook tool for cleaning dataframes.",
      "b": "Is correct. Impact analysis lists downstream items and consumers affected by a change and can send them a notification.",
      "c": "Is not correct. Pipeline comparison shows differences between stages, not downstream dependencies of a change.",
      "d": "Is not correct. The Capacity Metrics app reports compute consumption."
    }
  },
  {
    "id": 12,
    "question": "A team of analysts frequently rebuilds the same sales model from raw tables because they cannot find the existing enterprise model. Which combination BEST addresses this governance problem?",
    "options": [
      "a) Apply a Highly Confidential sensitivity label to the enterprise model",
      "b) Delete the raw tables so only one model is possible",
      "c) Give everyone the Admin role so they can see all workspaces",
      "d) Certify the enterprise model and make it discoverable in the OneLake catalog, granting Build permission to analysts"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A restrictive label reduces access and does nothing to improve discoverability.",
      "b": "Is not correct. Raw tables are needed by data engineering and removing them does not help analysts find the model.",
      "c": "Is not correct. Broad administrative access is a security risk and does not promote the right model.",
      "d": "Is correct. Endorsement plus catalog discoverability plus Build permission is the intended pattern for driving reuse of a governed model."
    }
  },
  {
    "id": 13,
    "question": "You have a Fabric lakehouse named Lakehouse1. Analysts connect to its SQL analytics endpoint by using SQL Server Management Studio. They need to create reusable T-SQL views over the lakehouse Delta tables. Which statement about the SQL analytics endpoint is true?",
    "options": [
      "a) It stores a separate copy of the lakehouse data optimized for T-SQL",
      "b) It must be created manually after the lakehouse is provisioned",
      "c) It is read-only for data but supports creating views, functions, and security objects",
      "d) It supports SELECT statements as well as INSERT, UPDATE, and DELETE"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It reads the same Delta files in OneLake with no additional copy.",
      "b": "Is not correct. The endpoint is created automatically with the lakehouse.",
      "c": "Is correct. The endpoint reads Delta tables and allows metadata objects such as views, table-valued functions, and security policies.",
      "d": "Is not correct. Data modification statements are not supported on the endpoint; a warehouse is required for full DML."
    }
  },
  {
    "id": 14,
    "question": "A data engineering team writes all transformation logic in T-SQL and requires multi-table transactions and full DML on the curated layer. Which Fabric item should host that layer?",
    "options": [
      "a) A Dataflow Gen2 with staging enabled",
      "b) A KQL database in an eventhouse",
      "c) A warehouse",
      "d) A lakehouse with its SQL analytics endpoint"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A dataflow is a preparation tool, not a queryable transactional store.",
      "b": "Is not correct. A KQL database is optimized for telemetry, log, and time-series analytics; it does not provide T-SQL multi-table transactions and its T-SQL support is a limited read-only subset.",
      "c": "Is correct. The Fabric warehouse provides read-write T-SQL with transactional DML across tables.",
      "d": "Is not correct. The lakehouse endpoint is read-only, so T-SQL cannot modify the data."
    }
  },
  {
    "id": 15,
    "question": "Which statement correctly describes where a Fabric warehouse physically stores its data?",
    "options": [
      "a) In an Azure SQL Database attached to the workspace",
      "b) Only in memory, with persistence provided by scheduled backups",
      "c) In a proprietary columnar format inside the capacity, exported to OneLake on demand",
      "d) As Delta Parquet files in OneLake, readable by Spark and other engines"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. That describes the separate Fabric SQL database item, not the warehouse.",
      "b": "Is not correct. Warehouse data is durably stored in OneLake.",
      "c": "Is not correct. The warehouse does not use a hidden proprietary store requiring export.",
      "d": "Is correct. Warehouse tables are persisted as Delta Parquet in OneLake, which is why Spark and Direct Lake can read them."
    }
  },
  {
    "id": 16,
    "question": "What is the PRIMARY advantage of the Fabric OneCopy principle for an analytics solution?",
    "options": [
      "a) Each engine keeps an optimized private copy that is kept in sync automatically",
      "b) A single physical copy of data can be read by Spark, T-SQL, and Direct Lake without duplication or export",
      "c) Data is automatically replicated to three regions for disaster recovery",
      "d) Storage costs are eliminated because OneLake storage is free"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The point of OneCopy is precisely that engines do not need private copies.",
      "b": "Is correct. OneCopy means all Fabric engines read the same Delta Parquet data in OneLake, removing copies and export steps.",
      "c": "Is not correct. Geo-replication is a separate platform concern and is not what OneCopy means.",
      "d": "Is not correct. OneLake storage is billed."
    }
  },
  {
    "id": 17,
    "question": "Which Fabric administration artifact would you inspect to determine who deleted a warehouse last week?",
    "options": [
      "a) The workspace lineage view",
      "b) The Monitoring hub",
      "c) The audit log of activities",
      "d) The Delta transaction log of the warehouse"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Lineage shows relationships between existing items.",
      "b": "Is not correct. The Monitoring hub tracks job and refresh runs, not item deletion by user.",
      "c": "Is correct. Fabric activity is recorded in the audit log, which can be searched by activity type, user, and date.",
      "d": "Is not correct. The Delta log records data file changes, and it is gone with the item."
    }
  },
  {
    "id": 18,
    "question": "A Fabric administrator restricted the tenant setting that controls service principal access to the Fabric public APIs to an approved security group. An Azure DevOps release pipeline authenticates as a service principal named SP1 and must deploy items to a workspace named Workspace1 by using the Fabric REST APIs. What should you do?",
    "options": [
      "a) Enable the Allow guest users to access Microsoft Fabric tenant setting",
      "b) Assign SP1 the Fabric Administrator role in Microsoft Entra ID",
      "c) Make SP1 a capacity administrator of the capacity that hosts Workspace1",
      "d) Add SP1 to the security group allowed by the Service principals can call Fabric public APIs setting and give SP1 a Contributor or higher role on Workspace1"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. That setting concerns external guest identities, not service principals.",
      "b": "Is not correct. Fabric Administrator is a tenant admin role and is excessive; it also does not grant item access in Workspace1 on its own.",
      "c": "Is not correct. Capacity administration does not grant content permissions on the items in a workspace.",
      "d": "Is correct. The tenant setting (enabled by default for new tenants but often scoped to a security group) must include SP1, and SP1 also needs a workspace role that allows creating and updating items."
    }
  },
  {
    "id": 19,
    "question": "Which statement about sensitivity labels in Fabric is TRUE?",
    "options": [
      "a) They are configured per workspace in the workspace settings",
      "b) They are applied only to reports and cannot be applied to lakehouses or semantic models",
      "c) They replace row-level security by filtering rows for unauthorized users",
      "d) They can be inherited by downstream items and persist in exports such as Excel and PDF"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Labels are defined centrally in Microsoft Purview Information Protection and applied to items.",
      "b": "Is not correct. Labels apply to many Fabric item types, including lakehouses and semantic models.",
      "c": "Is not correct. Labels classify and protect content; they do not filter rows.",
      "d": "Is correct. Label inheritance flows downstream and the protection travels with exported files."
    }
  },
  {
    "id": 20,
    "question": "You need to give a partner company read access to a specific folder of curated data in OneLake without copying the data into their tenant. Which capability should you use?",
    "options": [
      "a) A deployment pipeline stage assigned to the partner",
      "b) A Power BI app with a dedicated audience",
      "c) A paginated report subscription",
      "d) External data sharing"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Deployment pipelines move content between workspaces in the same tenant.",
      "b": "Is not correct. Apps distribute reports to consumers, not raw OneLake folders across tenants.",
      "c": "Is not correct. A subscription emails rendered report output.",
      "d": "Is correct. External data sharing shares OneLake data in place with another tenant, where recipients can access it through a shortcut."
    }
  },
  {
    "id": 21,
    "question": "You have a Fabric workspace that contains a warehouse named WH1 and a lakehouse named LH1. You need to join the FactSales table in WH1 to the DimCustomer table in LH1 by using a single T-SQL query, without copying any data. What should you do?",
    "options": [
      "a) Use COPY INTO to load DimCustomer into WH1, and then join the two tables in WH1",
      "b) In a query run against WH1, reference the lakehouse table by using a three-part name such as LH1.dbo.DimCustomer",
      "c) Create a linked server in WH1 that points to the SQL analytics endpoint of LH1",
      "d) Create an external data source in WH1 that points to the SQL analytics endpoint of LH1, and query it by using OPENQUERY"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. COPY INTO physically copies the data into the warehouse, which violates the requirement.",
      "b": "Is correct. Fabric supports cross-database queries by using three-part naming (database.schema.table), so a warehouse query can join directly to a lakehouse table through its SQL analytics endpoint without data movement.",
      "c": "Is not correct. Linked servers are not supported in Fabric Warehouse.",
      "d": "Is not correct. Fabric Warehouse does not support external data sources pointing to another SQL endpoint or OPENQUERY; cross-database three-part naming is the supported approach."
    }
  },
  {
    "id": 22,
    "question": "A regulator requires that a business unit's data never leave its country. Which Fabric approach satisfies this requirement?",
    "options": [
      "a) Apply a sensitivity label that blocks export from the country",
      "b) Assign that business unit's workspaces to a capacity created in a region inside that country",
      "c) Enable trusted workspace access on the workspaces",
      "d) Use a deployment pipeline to keep production content separate"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Labels apply protection policies but do not determine where data is stored or processed.",
      "b": "Is correct. Data residency in Fabric is controlled by the region of the capacity to which the workspaces are assigned, which is the basis of multi-geo deployments.",
      "c": "Is not correct. Trusted workspace access concerns secure connectivity to firewalled storage.",
      "d": "Is not correct. Deployment pipelines address release management, not residency."
    }
  },
  {
    "id": 23,
    "question": "You need to schedule and orchestrate a nightly sequence in a Fabric workspace that copies source data, runs two notebooks, and then refreshes a semantic model only if both notebooks succeed. Which item should you create?",
    "options": [
      "a) A pipeline",
      "b) A Dataflow Gen2 with multiple queries",
      "c) A Spark job definition",
      "d) An eventstream"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Pipelines orchestrate activities such as Copy data, Notebook, and Semantic model refresh with success dependencies and scheduling.",
      "b": "Is not correct. A dataflow transforms and loads data but cannot orchestrate notebooks or model refreshes.",
      "c": "Is not correct. A Spark job definition runs one Spark application.",
      "d": "Is not correct. An eventstream routes streaming events rather than orchestrating batch steps."
    }
  },
  {
    "id": 24,
    "question": "What is the purpose of a workspace identity in Fabric?",
    "options": [
      "a) To assign a unique sensitivity label to every item in the workspace",
      "b) To provide a managed service principal for the workspace that can be authorized on Azure resources",
      "c) To create a shared mailbox for refresh failure notifications",
      "d) To replace individual user accounts when users open reports"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Labels are unrelated to the workspace identity.",
      "b": "Is correct. A workspace identity is a managed identity for the workspace that Azure resources can trust, enabling features such as trusted workspace access.",
      "c": "Is not correct. Notification recipients are configured per item.",
      "d": "Is not correct. Report consumers are still authenticated as themselves."
    }
  },
  {
    "id": 25,
    "question": "You have a lakehouse in a workspace on an F64 capacity. A shortcut to an Azure Data Lake Storage Gen2 account fails because the storage account has public network access disabled. You need the shortcut to work without enabling public network access on the storage account. What should you configure?",
    "options": [
      "a) Configure trusted workspace access with a resource instance rule authorizing the workspace identity",
      "b) Move the data into the lakehouse with a Copy activity using a personal account",
      "c) Store the storage account key in the shortcut connection",
      "d) Recreate the shortcut as an internal shortcut"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Trusted workspace access plus a resource instance rule for the workspace identity allows the connection while the account stays firewalled.",
      "b": "Is not correct. A Copy activity faces the same network restriction and also duplicates the data.",
      "c": "Is not correct. A key does not bypass network restrictions that block the traffic before authentication.",
      "d": "Is not correct. Internal shortcuts target Fabric items, not external storage."
    }
  },
  {
    "id": 26,
    "question": "A Fabric pipeline must copy data from an Azure SQL Managed Instance that is reachable only from inside an Azure virtual network. You must NOT install or maintain gateway software on a virtual machine. What should you use for the connection?",
    "options": [
      "a) VNet data gateway",
      "b) Trusted workspace access",
      "c) On-premises data gateway",
      "d) OneLake File Explorer"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A virtual network data gateway is a Microsoft-managed gateway injected into a delegated subnet, so nothing has to be installed, and it is supported for pipeline Copy activities, Copy job, and Dataflow Gen2.",
      "b": "Is not correct. Trusted workspace access applies to firewall-enabled Azure storage accounts.",
      "c": "Is not correct. The on-premises data gateway requires installing the gateway software on a machine.",
      "d": "Is not correct. OneLake File Explorer is a desktop tool for browsing OneLake."
    }
  },
  {
    "id": 27,
    "question": "A data engineer wants a single place in the Fabric portal to check whether last night's pipeline, notebook, and semantic model refresh runs succeeded and how long each took. What should the engineer use?",
    "options": [
      "a) The Fabric Capacity Metrics app",
      "b) The Microsoft Purview audit log",
      "c) The Delta table history of the lakehouse tables",
      "d) The Monitoring hub"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. That is the role of the Fabric Capacity Metrics app.",
      "b": "Is not correct. Permission changes are found in audit logs.",
      "c": "Is not correct. Table version history is exposed through Delta history, not the Monitoring hub.",
      "d": "Is correct. The Monitoring hub centralizes run history and status for schedulable and runnable items."
    }
  },
  {
    "id": 28,
    "question": "An analyst with only Read permission on a certified semantic model cannot connect Excel to it. Which permission must be granted?",
    "options": [
      "a) Build",
      "b) Write",
      "c) Contributor role on the workspace",
      "d) Reshare"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Build permission allows creating new content on a semantic model, including Analyze in Excel connections and new reports.",
      "b": "Is not correct. Write allows editing the model itself, which is more than required.",
      "c": "Is not correct. A workspace role would grant far broader rights than needed for a consumer.",
      "d": "Is not correct. Reshare allows passing existing access to others, not creating new content."
    }
  },
  {
    "id": 29,
    "question": "Your organization stores raw data in Amazon S3 and in Azure Data Lake Storage Gen2. You need the data to appear as folders in a Fabric lakehouse without moving it or running scheduled copies. Which statement about using OneLake shortcuts for this requirement is true?",
    "options": [
      "a) A shortcut makes the remote data appear local in OneLake without moving or duplicating it",
      "b) A shortcut copies the source data into the lakehouse on a schedule",
      "c) Shortcuts can be created only by a Fabric administrator",
      "d) Shortcuts can target only other Fabric items in the same workspace"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. A shortcut is a reference that exposes the target data as if it were stored locally.",
      "b": "Is not correct. Shortcuts reference data in place and involve no scheduled copy.",
      "c": "Is not correct. Users with write permission on the item can create shortcuts.",
      "d": "Is not correct. Shortcuts can target items in other workspaces as well as external storage such as ADLS Gen2, S3, and Google Cloud Storage."
    }
  },
  {
    "id": 30,
    "question": "A department wants to use certified gold tables that live in a central lakehouse in another workspace, without duplicating 2 TB of data and without waiting for a nightly copy. What should they do?",
    "options": [
      "a) Build a Dataflow Gen2 that appends the tables each hour",
      "b) Configure mirroring from the central lakehouse to their lakehouse",
      "c) Ask for the Admin role on the central workspace",
      "d) Create an internal OneLake shortcut to the central lakehouse tables"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A dataflow would copy the data and introduce latency and storage cost.",
      "b": "Is not correct. Mirroring replicates external operational databases into Fabric, not Fabric lakehouse to lakehouse.",
      "c": "Is not correct. Elevated roles do not solve the data access pattern and grant excessive rights.",
      "d": "Is correct. Internal shortcuts expose tables from another Fabric item in place, with no duplication and no latency from copying."
    }
  },
  {
    "id": 31,
    "question": "You must ensure that each regional sales manager sees only their own region's rows in every report built on a semantic model, without creating one role per region. What should you implement?",
    "options": [
      "a) Column-level security in the SQL analytics endpoint",
      "b) Object-level security on the region column",
      "c) A separate report per region with a fixed page filter",
      "d) Dynamic row-level security using USERPRINCIPALNAME against a user-to-region mapping table"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Column-level security restricts which columns can be queried, not which rows, so it cannot limit each manager to their region in the semantic model.",
      "b": "Is not correct. Object-level security hides columns or tables from everyone in the role rather than filtering rows per user.",
      "c": "Is not correct. Report filters can be removed by users and are not a security boundary.",
      "d": "Is correct. Dynamic row-level security evaluates the current user with USERPRINCIPALNAME against a mapping table, so a single role serves every manager."
    }
  },
  {
    "id": 32,
    "question": "A semantic model role contains the DAX filter [Country] = \"Germany\" on the dim_customer table, and dim_customer has a one-to-many relationship to fact_sales. What do members of the role see?",
    "options": [
      "a) An error, because RLS filters cannot be defined on dimension tables",
      "b) All customers and all sales, because DAX filters are only visual-level",
      "c) Only German customers, but all sales rows",
      "d) Only German customers and only the sales rows related to them"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Filtering dimensions and letting the filter propagate is the recommended practice.",
      "b": "Is not correct. Role filters are applied to every query, not just visuals.",
      "c": "Is not correct. The filter propagates along the one-to-many relationship to the fact table.",
      "d": "Is correct. Row-level security filters propagate from the one side to the many side, so related sales rows are filtered as well."
    }
  },
  {
    "id": 33,
    "question": "Which statement about testing row-level security in Power BI is TRUE?",
    "options": [
      "a) The View as role feature can simulate a role and, for dynamic RLS, a specific user name",
      "b) RLS cannot be tested until the model is published and users report problems",
      "c) RLS applies only to users who have Build permission",
      "d) Workspace members are always subject to the RLS roles of models in that workspace"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. View as role allows selecting a role and supplying a user principal name so dynamic filters can be verified.",
      "b": "Is not correct. RLS can be validated in Power BI Desktop and in the service before broad release.",
      "c": "Is not correct. RLS applies to users who consume the model regardless of Build permission.",
      "d": "Is not correct. Users with edit rights on the model, such as workspace members, are not restricted by its RLS roles."
    }
  },
  {
    "id": 34,
    "question": "Users in the Analyst role must not even be aware that a Salary column exists in the semantic model. Which feature should you use?",
    "options": [
      "a) A perspective that excludes the column",
      "b) Object-level security on the column",
      "c) Row-level security filtering the employee table",
      "d) Hiding the column in the model view"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A perspective is a usability feature and is not a security boundary.",
      "b": "Is correct. Object-level security removes the column from the model metadata for members of the role so it cannot be discovered or queried.",
      "c": "Is not correct. Row-level security restricts rows, not the visibility of a column.",
      "d": "Is not correct. Hidden columns are still discoverable through queries and external tools."
    }
  },
  {
    "id": 35,
    "question": "A report built on a model where object-level security hides a column is opened by a restricted user. What happens?",
    "options": [
      "a) The report is blocked entirely and cannot be opened",
      "b) The visuals referencing the hidden column show blank values",
      "c) The visuals referencing the hidden column show masked values such as XXXX",
      "d) The visuals referencing the hidden column return an error for that user"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Other visuals in the report continue to work.",
      "b": "Is not correct. Blanks are the effect of row filtering, not object-level security.",
      "c": "Is not correct. Masking is a feature of dynamic data masking in SQL, not OLS.",
      "d": "Is correct. Because the object no longer exists in the user's view of the model, visuals that reference it fail with an error, which is why report design must account for OLS."
    }
  },
  {
    "id": 36,
    "question": "Which combination correctly implements security so that a T-SQL user querying a Fabric warehouse sees only rows for their own department?",
    "options": [
      "a) Dynamic data masking on the department column",
      "b) A view with a WHERE clause and instructions not to query the base table",
      "c) An inline table-valued function used as a filter predicate in a security policy",
      "d) A OneLake data access role on the warehouse folder"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Masking obfuscates values but returns all rows.",
      "b": "Is not correct. Relying on users avoiding the base table is not enforcement.",
      "c": "Is correct. SQL row-level security uses an inline table-valued predicate function bound to the table by a security policy, enforced by the engine for every query.",
      "d": "Is not correct. OneLake data access roles apply to lakehouse folders and tables, not to warehouse T-SQL row filtering."
    }
  },
  {
    "id": 37,
    "question": "A support team must be able to query a customer table but must not see complete email addresses, while the fraud team must see them in full. Which feature meets this with the LEAST duplication of objects?",
    "options": [
      "a) Two separate tables loaded by different pipelines",
      "b) Object-level security in the semantic model",
      "c) Row-level security on the customer table",
      "d) Dynamic data masking with UNMASK granted to the fraud team"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Maintaining duplicate tables doubles storage and load logic.",
      "b": "Is not correct. OLS hides the column entirely rather than showing a partially masked value.",
      "c": "Is not correct. Row-level security filters rows rather than obscuring a column's values.",
      "d": "Is correct. Dynamic data masking shows obfuscated values by default and the UNMASK permission reveals the real values to privileged users, with one copy of the data."
    }
  },
  {
    "id": 38,
    "question": "A workspace contains a lakehouse with OneLake security enabled. Several analysts have the Viewer role on the workspace. You need them to read only the Tables/sales and Files/sales folders, not the rest of the lakehouse. What should you use?",
    "options": [
      "a) Workspace roles",
      "b) Sensitivity labels",
      "c) OneLake security roles on the lakehouse",
      "d) Deployment rules"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Workspace roles apply to every item in the workspace and cannot express folder- or table-level restrictions.",
      "b": "Is not correct. Labels classify and protect but do not grant or deny access to specific folders.",
      "c": "Is correct. OneLake security roles (formerly OneLake data access roles) grant Read to selected tables and folders for users without Write permission, such as Viewers, and can also include row- and column-level rules.",
      "d": "Is not correct. Deployment rules change data sources and parameters when deploying between pipeline stages."
    }
  },
  {
    "id": 39,
    "question": "What is the effect of granting a user the ReadData permission on a warehouse but no workspace role?",
    "options": [
      "a) The user can see the warehouse but any query fails until a workspace role is added",
      "b) The user can read the warehouse data through T-SQL without seeing other items in the workspace",
      "c) The user can read and modify warehouse tables",
      "d) The user automatically becomes a workspace Viewer"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. ReadData is sufficient to query the data.",
      "b": "Is correct. Item-level sharing with ReadData allows querying that specific warehouse's data without granting access to the rest of the workspace.",
      "c": "Is not correct. Write access requires additional permissions.",
      "d": "Is not correct. Item permissions do not add workspace roles."
    }
  },
  {
    "id": 40,
    "question": "A lakehouse in a workspace has the Confidential sensitivity label. Downstream label inheritance is enabled in the tenant. A developer creates a semantic model and a report on the lakehouse, and a user exports the report to Excel. What should you expect?",
    "options": [
      "a) The Confidential label can flow downstream to the semantic model and the report, and the exported Excel file carries the label",
      "b) The label is removed from all items when the content is deployed to another workspace",
      "c) The developer must apply the label manually to the semantic model and the report",
      "d) The label on the report flows upstream and overrides the label on the lakehouse"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Labels are inherited by items created from labeled upstream items and persist in exported files such as Excel and PDF.",
      "b": "Is not correct. Labels travel with the content.",
      "c": "Is not correct. Downstream inheritance is automatic when enabled.",
      "d": "Is not correct. Inheritance flows downstream, not upstream."
    }
  },
  {
    "id": 41,
    "question": "An organization needs to be warned when a semantic model contains credit card numbers. Which capability should be configured?",
    "options": [
      "a) A data loss prevention policy in Microsoft Purview for Fabric",
      "b) The Best Practice Analyzer in Tabular Editor",
      "c) An activator rule on the semantic model refresh",
      "d) A deployment rule on the production stage"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. DLP policies scan Fabric items for sensitive information types and can alert administrators or warn users.",
      "b": "Is not correct. The Best Practice Analyzer checks modeling practices, not data sensitivity.",
      "c": "Is not correct. Activator triggers on data conditions defined by the author, not on sensitive information type detection.",
      "d": "Is not correct. Deployment rules change connections and parameters during release."
    }
  },
  {
    "id": 42,
    "question": "The developer who created and owns a semantic model with a scheduled refresh is leaving the company, and their account will be disabled. You must ensure that the scheduled refresh keeps working. What should you do?",
    "options": [
      "a) Delete the semantic model and recreate it in another workspace",
      "b) Grant every workspace member the Admin role",
      "c) Change the refresh schedule to manual",
      "d) Take over the semantic model and rebind its data sources to credentials that are not tied to the departing developer, such as a shared connection that uses a service principal"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Recreating the model is unnecessary effort and loses history.",
      "b": "Is not correct. Broad admin rights do not change the credentials the item runs under.",
      "c": "Is not correct. Manual refresh abandons the requirement instead of solving it.",
      "d": "Is correct. Taking over the semantic model makes a maintained identity its owner, and updating the data source credentials to a non-personal identity such as a service principal keeps the scheduled refresh valid."
    }
  },
  {
    "id": 43,
    "question": "You have a Direct Lake semantic model on a lakehouse. Report consumers must see only permitted rows and must NOT be able to query the lakehouse directly, while data engineers keep full access to the lakehouse. What should you do?",
    "options": [
      "a) Define row-level security roles on the semantic model, configure the model's connection to use a fixed identity instead of single sign-on, and grant consumers access to the model or app only",
      "b) Rely on report page filters plus a hidden bookmark",
      "c) Remove all workspace roles and share only reports",
      "d) Apply dynamic data masking on the lakehouse Delta files"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. With a fixed identity (for example a service principal) the model reads the lakehouse on behalf of consumers, so they need no lakehouse permissions, and the semantic model RLS roles filter their rows.",
      "b": "Is not correct. Report filters are not a security control.",
      "c": "Is not correct. Removing roles blocks engineers and still provides no row filtering for consumers.",
      "d": "Is not correct. Dynamic data masking is a SQL feature and does not apply to Delta files read by Direct Lake."
    }
  },
  {
    "id": 44,
    "question": "A user is a member of two row-level security roles in a semantic model. Role1 filters Country to France and Role2 filters Country to Spain. The user opens a report built on the model. What data does the user see?",
    "options": [
      "a) Only France, because the first role assigned wins",
      "b) No data, because the filters conflict",
      "c) Data for both France and Spain, because role filters are combined with a union",
      "d) An error message when opening the report"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. There is no precedence order between roles.",
      "b": "Is not correct. Multiple roles do not intersect to nothing; they are additive.",
      "c": "Is correct. When a user belongs to several roles, the permitted rows are the union of what each role allows.",
      "d": "Is not correct. Multiple role membership is supported."
    }
  },
  {
    "id": 45,
    "question": "Which statement about row-level security and a composite model that connects to another semantic model with DirectQuery is TRUE?",
    "options": [
      "a) Row-level security cannot be used with composite models at all",
      "b) The remote model's row-level security is enforced for the querying user, so consumers need Build permission and are still filtered",
      "c) The composite model must duplicate the remote roles to stay secure",
      "d) The remote model's row-level security is bypassed by the composite model"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. RLS works in composite models, with local and remote rules evaluated appropriately.",
      "b": "Is correct. DirectQuery to a semantic model passes the user identity through, so the source model's RLS is enforced and consumers require Build permission on that source.",
      "c": "Is not correct. Duplicating roles is unnecessary and risks divergence.",
      "d": "Is not correct. Security on the remote model continues to apply to the end user's identity."
    }
  },
  {
    "id": 46,
    "question": "You define row-level security roles on a semantic model in a workspace. During testing, a user who has the Contributor role on the workspace sees all rows even though they are added to a restricted role. What explains this behavior?",
    "options": [
      "a) Users with edit rights on the model, such as Admin, Member, and Contributor, are not restricted by its RLS roles",
      "b) RLS applies only when the model uses Import storage mode",
      "c) RLS applies only to users outside the tenant",
      "d) RLS must be republished from Power BI Desktop before it applies to any user"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is correct. Row-level security constrains read-only consumers; identities with write access to the model bypass it, which is why consumers should be given Viewer or item-level access instead.",
      "b": "Is not correct. RLS is supported for Import, DirectQuery, and Direct Lake models.",
      "c": "Is not correct. RLS applies to internal consumers too.",
      "d": "Is not correct. Role membership changes in the service take effect without republishing; the observed behavior is caused by the user's write access."
    }
  },
  {
    "id": 47,
    "question": "You need to prevent report authors from creating their own aggregations of a numeric column so that all figures come from governed measures. Which model setting helps?",
    "options": [
      "a) Set the column's summarization to Sum",
      "b) Mark the table as a date table",
      "c) Discourage implicit measures",
      "d) Enable the large semantic model storage format"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Setting a default summarization encourages implicit aggregation rather than preventing it.",
      "b": "Is not correct. Marking a date table supports time intelligence.",
      "c": "Is correct. Discouraging implicit measures forces authors to use explicit measures that carry the agreed business logic.",
      "d": "Is not correct. The storage format affects size limits and refresh features."
    }
  },
  {
    "id": 48,
    "question": "You publish a Power BI app from a workspace. The finance team must see the budget reports, and the sales team must see only the sales reports, from the same app. What should you configure?",
    "options": [
      "a) Row-level security only, because it also hides reports",
      "b) A single audience that includes both teams",
      "c) A separate workspace and app for each team",
      "d) Multiple app audiences, each showing a different subset of the app's content"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. RLS filters rows inside a semantic model; it does not control which reports appear in an app.",
      "b": "Is not correct. A single audience would show both teams the same content.",
      "c": "Is not correct. Separate workspaces duplicate content and are unnecessary because one app supports multiple audiences.",
      "d": "Is correct. App audiences let different groups of consumers see different selections of the app's items from one app."
    }
  },
  {
    "id": 49,
    "question": "A pipeline must authenticate to an Azure SQL Database using an identity that is not tied to any individual employee. Which option is MOST appropriate?",
    "options": [
      "a) A shared local SQL login stored in a notebook cell",
      "b) A service principal configured in a shared connection",
      "c) Anonymous authentication with a firewall exception",
      "d) The pipeline author's organizational account"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Storing credentials in code exposes secrets and bypasses connection management.",
      "b": "Is correct. A service principal in a managed, shared connection provides a non-personal identity with auditable, centrally managed credentials.",
      "c": "Is not correct. Anonymous access to a database is not a supported or safe pattern.",
      "d": "Is not correct. Personal accounts break when the person leaves or changes password and are poor practice for automation."
    }
  },
  {
    "id": 50,
    "question": "You need a Fabric Dataflow Gen2 to load data from a SQL Server database hosted in your company's on-premises datacenter, and the connection must remain available if one server fails. What should you use?",
    "options": [
      "a) No gateway, because Fabric can reach any SQL Server source directly",
      "b) An on-premises data gateway installed on a cluster of servers that can reach the database",
      "c) An on-premises data gateway installed on each report author's computer with Power BI Desktop",
      "d) OneLake File Explorer installed on the database server"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Sources that are not reachable from the cloud require a gateway.",
      "b": "Is correct. The gateway bridges Fabric to network-isolated sources and supports clusters of machines for availability and load balancing.",
      "c": "Is not correct. The gateway is normally installed on servers close to the data source, not on authors' workstations, and personal-mode gateways do not support Dataflow Gen2.",
      "d": "Is not correct. OneLake File Explorer is a desktop tool for browsing OneLake files, not a data source connectivity bridge."
    }
  },
  {
    "id": 51,
    "question": "You have two Fabric workspaces named DataWS and ReportWS. DataWS contains a warehouse named Warehouse1. ReportWS contains a certified semantic model named Model1 that uses Import mode to load data from Warehouse1. Analysts in a group named Group1 must create their own Power BI reports based on Model1. Group1 must be prevented from querying Warehouse1. What should you do?",
    "options": [
      "a) Add Group1 to the Viewer role of DataWS and grant Group1 the Build permission on Warehouse1",
      "b) Configure a deployment rule in the production stage that hides Warehouse1 from Group1",
      "c) Create a OneLake security role on Model1 that grants Group1 read access",
      "d) Grant Group1 the Build permission on Model1 only, without assigning Group1 any role in DataWS or any permission on Warehouse1"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A Viewer role on DataWS plus Build on Warehouse1 gives Group1 access to the warehouse data, which violates the requirement.",
      "b": "Is not correct. Deployment rules change data sources and parameters during deployment; they do not control end-user permissions.",
      "c": "Is not correct. OneLake security roles are defined on data items such as lakehouses, not on semantic models.",
      "d": "Is correct. Build permission on Model1 lets Group1 create reports, and because Model1 is an Import model refreshed under the owner's credentials, Group1 needs no access to DataWS or Warehouse1."
    }
  },
  {
    "id": 52,
    "question": "You have a semantic model named Model1 that contains a Sales table related to a Region table. Each sales manager must see only the rows for the regions assigned to them. Region assignments change weekly and are maintained by HR in a source table that contains the manager email address and the region. You need to implement row-level security that requires no changes to Model1 when assignments change. What should you do?",
    "options": [
      "a) Store the region list for each manager in the workspace description and reference it in a role",
      "b) Add page-level filters to each report that filter Region by manager name",
      "c) Import the HR assignment table into Model1 as a hidden table related to Region, and create a role whose filter compares the email column to USERPRINCIPALNAME()",
      "d) Create one role per manager, each with a hardcoded DAX filter on the Region table"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Workspace metadata cannot be referenced in DAX role filters.",
      "b": "Is not correct. Report filters are not a security boundary; users can change or bypass them and still query the model.",
      "c": "Is correct. Dynamic row-level security uses a security mapping table loaded into the model and a role filter based on USERPRINCIPALNAME(), so assignment changes flow in with the next refresh without modifying the model.",
      "d": "Is not correct. Hardcoded static roles require a model change and role membership update every time an assignment changes."
    }
  },
  {
    "id": 53,
    "question": "Your organization uses Microsoft Fabric. A Fabric administrator configures the tenant setting that allows users to create workspaces so that it applies only to a security group named WSCreators. What is the effect on existing workspaces and on new workspace creation?",
    "options": [
      "a) Existing workspaces and their content continue to work unchanged, and only members of WSCreators can create new workspaces",
      "b) Existing workspaces created by users outside WSCreators are deleted after 30 days",
      "c) Existing items lose their sensitivity labels",
      "d) All existing workspaces created by users outside WSCreators become read-only"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Tenant settings govern who can perform an action going forward; existing workspaces and their content are unaffected.",
      "b": "Is not correct. Changing the setting does not delete any workspace.",
      "c": "Is not correct. Sensitivity labels are unrelated to the workspace creation setting.",
      "d": "Is not correct. The setting does not change permissions on existing workspaces or items."
    }
  },
  {
    "id": 54,
    "question": "You have a lakehouse named Lakehouse1 and a semantic model named Model1. Model1 uses Import mode to load data from the SQL analytics endpoint of Lakehouse1. The Employee table contains a column named Salary. Users in a group named Group1 query the SQL analytics endpoint by using T-SQL and also build reports based on Model1. Group1 must be prevented from seeing Salary through both access paths. What should you do?",
    "options": [
      "a) Configure column-level security on the SQL analytics endpoint only, because Model1 inherits it",
      "b) Configure object-level security in Model1 only, because the SQL analytics endpoint inherits it",
      "c) Configure column-level security on the SQL analytics endpoint for T-SQL access, and configure object-level security in Model1 for report access",
      "d) Apply dynamic data masking to the Salary column on the SQL analytics endpoint only"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. An Import model is refreshed under the model owner's identity, so endpoint column-level security does not flow to report users; the permissions must be duplicated in the model.",
      "b": "Is not correct. Semantic model object-level security applies only to queries against the model, not to T-SQL queries against the endpoint.",
      "c": "Is correct. Column-level security (GRANT or DENY on columns) protects the T-SQL path, and object-level security protects the semantic model path; for Import models, Microsoft documents that endpoint permissions must be duplicated with semantic model OLS.",
      "d": "Is not correct. Dynamic data masking only obfuscates values for T-SQL users and does not protect the data loaded into Model1."
    }
  },
  {
    "id": 55,
    "question": "You have a semantic model named Model1 and a report named Report1 that contain confidential customer data. Users must be able to export data from Report1 to Excel and download Report1 as a .pbix file. Any exported or downloaded files must remain encrypted and openable only by authorized users in your organization. What should you do?",
    "options": [
      "a) Change the storage mode of Model1 to DirectQuery",
      "b) Disconnect the workspace from Git integration",
      "c) Apply a Microsoft Purview sensitivity label that has encryption (protection) settings to Model1 and Report1",
      "d) Hide the confidential tables in Model1"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Storage mode does not affect whether exported files are protected.",
      "b": "Is not correct. Git integration is a development lifecycle feature unrelated to consumer exports.",
      "c": "Is correct. A sensitivity label with encryption is applied to supported exports such as Excel, PowerPoint, PDF, and .pbix files, so the protection travels with the file and only authorized users can open it.",
      "d": "Is not correct. Hidden objects are a usability feature, not security, and do not protect exported files."
    }
  },
  {
    "id": 56,
    "question": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains dozens of tables, including a table named telemetry. Data scientists in a group named DS have the Read permission on Lakehouse1 and use Spark notebooks in another workspace. DS members must read only the telemetry table. What should you use?",
    "options": [
      "a) Row-level security roles in a semantic model built on Lakehouse1",
      "b) A OneLake security role in Lakehouse1 that grants DS read access to the telemetry table",
      "c) A GRANT SELECT statement on the telemetry table in the SQL analytics endpoint of Lakehouse1",
      "d) Dynamic data masking on the telemetry table"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Semantic model roles apply only to queries against the model, not to Spark access to OneLake.",
      "b": "Is correct. OneLake security roles (formerly OneLake data access roles) grant users with Read permission access to specific tables or folders and are enforced across Fabric engines, including Spark.",
      "c": "Is not correct. SQL permissions apply only to T-SQL queries through the SQL analytics endpoint, not to Spark reading OneLake.",
      "d": "Is not correct. Dynamic data masking obfuscates column values in T-SQL results and does not restrict which tables can be read."
    }
  },
  {
    "id": 57,
    "question": "You are a Fabric administrator. For a compliance audit, you must provide a list of every user who viewed a confidential report named Report1 during the past 30 days. What should you use?",
    "options": [
      "a) The deployment pipeline history",
      "b) The report's usage metrics report and the Fabric activity audit log",
      "c) The Delta transaction log of the underlying tables",
      "d) The Capacity Metrics app timepoint detail"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Deployment history records releases.",
      "b": "Is correct. Usage metrics show consumption of the report and the audit log records view activities per user for compliance purposes.",
      "c": "Is not correct. The Delta log records data file operations, not report views.",
      "d": "Is not correct. Capacity metrics attribute compute consumption, not individual report viewers over a month."
    }
  },
  {
    "id": 58,
    "question": "You have a lakehouse named Lakehouse1. Row-level security is defined on the SQL analytics endpoint of Lakehouse1 by using a security policy. You create a semantic model named Model1 that uses Direct Lake on SQL endpoint storage mode with the default Direct Lake behavior (Automatic) and single sign-on. A user who is subject to the security policy opens a report based on Model1. What happens?",
    "options": [
      "a) The queries fail, because SQL-based row-level security is incompatible with Direct Lake",
      "b) The queries fall back to DirectQuery through the SQL analytics endpoint, and the endpoint's row-level security filters the results for the user",
      "c) The queries run in Direct Lake mode and return all rows, because Direct Lake reads the Delta files directly",
      "d) Model1 automatically converts the endpoint's security policy into semantic model roles"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Queries fail only when the Direct Lake behavior is set to DirectLakeOnly, which disables fallback.",
      "b": "Is correct. When the SQL analytics endpoint enforces row-level security, Direct Lake on SQL endpoint falls back to DirectQuery, so the endpoint filters rows by the user's identity.",
      "c": "Is not correct. This is the behavior of Direct Lake on OneLake, which does not observe SQL-based row-level security; Direct Lake on SQL endpoint performs a permission check through the endpoint.",
      "d": "Is not correct. Endpoint security policies are never converted into semantic model roles."
    }
  },
  {
    "id": 59,
    "question": "You have a Fabric workspace that contains a warehouse named Warehouse1. A user named User1 must query only the dbo.Sales table in Warehouse1 by using T-SQL. User1 must not see any other items in the workspace or any other tables in Warehouse1. The solution must follow the principle of least privilege. What should you do?",
    "options": [
      "a) Add User1 to the Viewer role of the workspace",
      "b) Share Warehouse1 with User1 and select the Read all data using SQL (ReadData) permission",
      "c) Add User1 to the Contributor role of the workspace and DENY SELECT on all other tables",
      "d) Share Warehouse1 with User1 without selecting additional permissions, and then run GRANT SELECT ON dbo.Sales TO User1"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. The Viewer role exposes every item in the workspace and lets User1 read all warehouse tables.",
      "b": "Is not correct. ReadData grants read access to all tables and views in Warehouse1.",
      "c": "Is not correct. Contributor exposes and allows editing of all workspace items, which violates least privilege.",
      "d": "Is correct. Sharing with no additional permissions grants only Read (connect) on Warehouse1, and a granular T-SQL GRANT gives access to the single table."
    }
  },
  {
    "id": 60,
    "question": "You want every new item in a workspace to automatically carry the Confidential label without relying on authors. What should be configured?",
    "options": [
      "a) A deployment rule in the production stage",
      "b) A workspace setting called Default sensitivity",
      "c) An activator rule on item creation",
      "d) A default label policy in Microsoft Purview that applies to Fabric content, with label inheritance from upstream items"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Deployment rules change connections and parameters.",
      "b": "Is not correct. There is no workspace-level default sensitivity setting that substitutes for a Purview policy.",
      "c": "Is not correct. Activator responds to data conditions, not governance labeling.",
      "d": "Is correct. Default labeling policies and downstream inheritance are configured centrally in Purview and applied to Fabric items."
    }
  },
  {
    "id": 61,
    "question": "Which source control systems can be connected directly to a Fabric workspace through Git integration?",
    "options": [
      "a) Subversion and Team Foundation Version Control",
      "b) Any Git server reachable over HTTPS",
      "c) Only Azure DevOps Repos",
      "d) Azure DevOps Repos and GitHub"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Centralized version control systems are not supported.",
      "b": "Is not correct. Arbitrary self-hosted Git servers are not supported targets for workspace Git integration.",
      "c": "Is not correct. GitHub is also supported.",
      "d": "Is correct. Fabric workspaces can be connected to Azure DevOps Repos or to GitHub repositories and branches."
    }
  },
  {
    "id": 62,
    "question": "A developer wants an isolated environment to change a semantic model and a notebook without affecting the shared development workspace. Which Fabric Git feature is designed for this?",
    "options": [
      "a) Branch out to a new workspace",
      "b) Workspace app audiences",
      "c) Item takeover",
      "d) Deployment pipeline stage assignment"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Branching out creates a new branch and a new workspace bound to it, giving the developer an isolated sandbox.",
      "b": "Is not correct. Audiences control which consumers see which app content.",
      "c": "Is not correct. Item takeover changes the identity an item runs under.",
      "d": "Is not correct. Pipeline stages are for promoting content, not for isolating in-progress development."
    }
  },
  {
    "id": 63,
    "question": "Which statement about the relationship between Git integration and deployment pipelines in Fabric is MOST accurate?",
    "options": [
      "a) Git integration is only for notebooks and deployment pipelines only for reports",
      "b) Git integration provides version control and code review, while deployment pipelines promote content between workspaces",
      "c) They are mutually exclusive and cannot be used in the same workspace",
      "d) Deployment pipelines replace the need for source control"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Both features support a broad range of item types.",
      "b": "Is correct. The two features are complementary: Git covers versioning and review, pipelines cover controlled promotion across stages.",
      "c": "Is not correct. Many teams connect a workspace to Git and also include it in a deployment pipeline.",
      "d": "Is not correct. Pipelines do not store history, diffs, or branches."
    }
  },
  {
    "id": 64,
    "question": "What is the MAIN benefit of the Tabular Model Definition Language for managing semantic models in source control?",
    "options": [
      "a) It encrypts measure definitions so they cannot be reviewed",
      "b) It converts the model to DirectQuery automatically",
      "c) It stores model metadata as readable text files that produce meaningful diffs",
      "d) It compresses the model so the repository stays small"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Definitions are stored in clear text precisely so they can be reviewed.",
      "b": "Is not correct. TMDL describes the model; it does not change storage mode.",
      "c": "Is correct. TMDL is a text-based metadata format whose diffs are human readable, which makes code review and merges practical.",
      "d": "Is not correct. TMDL is about readability, not compression."
    }
  },
  {
    "id": 65,
    "question": "You use a deployment pipeline with Development, Test, and Production stages. A semantic model named Model1 uses Import mode to load data from the SQL analytics endpoint of a warehouse in the Development workspace. When Model1 is deployed to the Production stage, it must connect to the warehouse in the Production workspace. What should you configure?",
    "options": [
      "a) A pipeline parameter in the data pipeline",
      "b) A shortcut from the development warehouse to production",
      "c) A new semantic model in production created manually",
      "d) A data source deployment rule on the production stage"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Pipeline parameters apply to data pipelines, not to semantic model connections.",
      "b": "Is not correct. A shortcut does not change which source a model queries.",
      "c": "Is not correct. Manual recreation defeats the purpose of automated promotion and causes drift.",
      "d": "Is correct. A data source rule on the Production stage replaces the server and database of Model1 when it is deployed into that stage; without it, the deployed model keeps pointing to the Development warehouse."
    }
  },
  {
    "id": 66,
    "question": "How many stages can a Fabric deployment pipeline contain?",
    "options": [
      "a) Exactly three",
      "b) Up to five",
      "c) Unlimited",
      "d) Up to ten"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Three stages are the default, but the number can be changed.",
      "b": "Is not correct. The maximum is higher than five.",
      "c": "Is not correct. There is a defined maximum.",
      "d": "Is correct. A deployment pipeline supports up to ten stages, with three created by default."
    }
  },
  {
    "id": 67,
    "question": "Which statement about deploying content with a Fabric deployment pipeline is TRUE?",
    "options": [
      "a) Deployment always copies the data of a lakehouse to the target stage",
      "b) Selected items can be deployed, and item metadata rather than warehouse or lakehouse data is promoted",
      "c) Deployment requires the source and target workspaces to share the same capacity",
      "d) Only whole workspaces can be deployed, never individual items"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data is not copied by the pipeline; the target stage has its own data.",
      "b": "Is correct. Deployment promotes item definitions and metadata, and selective deployment lets you pick which items move.",
      "c": "Is not correct. Stages may be assigned to different capacities.",
      "d": "Is not correct. Selective deployment of individual items is supported."
    }
  },
  {
    "id": 68,
    "question": "An automated release must create a notebook and then run it, with no user interaction. Which mechanism is MOST appropriate?",
    "options": [
      "a) The Fabric REST APIs called by a service principal",
      "b) A manual copy of the notebook file into OneLake File Explorer",
      "c) The Power BI import API used with a personal account",
      "d) A subscription that emails the notebook to the operator"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Fabric REST APIs support creating items and starting jobs, and a service principal provides a non-interactive identity.",
      "b": "Is not correct. Copying files does not register the item or start a run.",
      "c": "Is not correct. Personal accounts are unsuitable for automation and the import API does not cover Fabric notebook creation and job runs.",
      "d": "Is not correct. Subscriptions distribute report output."
    }
  },
  {
    "id": 69,
    "question": "A semantic model named Model1 is published to a workspace on a Fabric capacity. You need to add a calculation group to Model1 directly in the workspace, without downloading or republishing a .pbix file. Which tool should you use to connect to Model1 through the XMLA endpoint?",
    "options": [
      "a) Tabular Editor",
      "b) Power Query Online",
      "c) Data Wrangler",
      "d) The Fabric Capacity Metrics app"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. Tabular Editor connects to the published model through the XMLA endpoint and can create objects such as calculation groups and perspectives and save them directly to the service.",
      "b": "Is not correct. Power Query Online authors dataflow queries.",
      "c": "Is not correct. Data Wrangler cleans dataframes in notebooks.",
      "d": "Is not correct. The metrics app analyzes capacity consumption."
    }
  },
  {
    "id": 70,
    "question": "Which prerequisite must be satisfied before an external tool can WRITE to a semantic model over the XMLA endpoint?",
    "options": [
      "a) Git integration must be connected to the workspace",
      "b) The user must be a Fabric administrator",
      "c) The semantic model must use DirectQuery storage mode",
      "d) The workspace must be on a Fabric or Premium capacity and XMLA read-write must be enabled"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Git integration is independent of XMLA.",
      "b": "Is not correct. Tenant administration is not required to edit a model.",
      "c": "Is not correct. Storage mode is irrelevant to XMLA access.",
      "d": "Is correct. XMLA endpoint read-write access requires a capacity that supports it and the corresponding capacity setting, plus write permission on the model."
    }
  },
  {
    "id": 71,
    "question": "A team wants automated checks that a semantic model follows naming and performance standards before release. Which approach is MOST suitable?",
    "options": [
      "a) Run the Best Practice Analyzer rules from Tabular Editor in the release pipeline",
      "b) Increase the capacity SKU before deployment",
      "c) Enable query caching on the model",
      "d) Manual peer review of the report screenshots"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Best Practice Analyzer rules can be executed from the command line in a build pipeline to fail a release on violations.",
      "b": "Is not correct. Scaling capacity does not enforce modeling standards.",
      "c": "Is not correct. Query caching is a performance feature, not a quality gate.",
      "d": "Is not correct. Screenshots cannot verify metadata standards and do not scale."
    }
  },
  {
    "id": 72,
    "question": "Which method allows automated validation that a measure returns the same total as the warehouse, as part of a deployment process?",
    "options": [
      "a) Enable detect data changes on the incremental refresh policy",
      "b) Compare screenshots of the report before and after deployment",
      "c) Use a notebook with semantic link to evaluate the DAX measure and compare it with a T-SQL aggregate",
      "d) Run VACUUM on the gold tables and re-check the report"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Detect data changes optimizes refresh, not correctness testing.",
      "b": "Is not correct. Visual comparison is manual and unreliable.",
      "c": "Is correct. Semantic link lets a notebook run DAX against the model and compare the result with a query against the source, which can fail the release automatically.",
      "d": "Is not correct. VACUUM is table maintenance and does not validate measures."
    }
  },
  {
    "id": 73,
    "question": "Which items are typically represented in Git when a Fabric workspace is connected to a repository?",
    "options": [
      "a) Supported item definitions such as notebooks, semantic models, reports, and pipelines, stored as folders and files",
      "b) Only Power BI reports",
      "c) The Delta Parquet files of every lakehouse table",
      "d) The capacity configuration and tenant settings"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Git integration serializes supported item definitions into folders with metadata and definition files.",
      "b": "Is not correct. Many item types beyond reports are supported.",
      "c": "Is not correct. Data is not committed to Git; only item definitions are.",
      "d": "Is not correct. Tenant and capacity configuration are administered separately."
    }
  },
  {
    "id": 74,
    "question": "After a colleague commits changes to the connected branch, what must you do in the workspace to get those changes?",
    "options": [
      "a) Update the workspace from the source control pane",
      "b) Delete and reconnect the workspace to Git",
      "c) Deploy from the development stage of a deployment pipeline",
      "d) Nothing, because the workspace synchronizes automatically every 15 minutes"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Incoming commits are applied to the workspace with the Update action in the source control pane.",
      "b": "Is not correct. Reconnecting is unnecessary and risks losing local changes.",
      "c": "Is not correct. Deployment pipelines move content between workspaces, not from Git.",
      "d": "Is not correct. Synchronization from Git to the workspace is an explicit action."
    }
  },
  {
    "id": 75,
    "question": "Which practice BEST prevents environment-specific values from breaking content after promotion?",
    "options": [
      "a) Parameterize connections and paths, and bind the parameters with deployment rules or variable libraries",
      "b) Disable Git integration in production",
      "c) Hardcode production connection strings and change them back after each deployment",
      "d) Keep one workspace for all environments and use folders to separate them"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Externalizing environment values into parameters and binding them per stage is the standard approach to safe promotion.",
      "b": "Is not correct. Turning off source control reduces traceability without solving parameterization.",
      "c": "Is not correct. Manual editing after each release is error prone and not auditable.",
      "d": "Is not correct. A single workspace provides no isolation between environments."
    }
  },
  {
    "id": 76,
    "question": "Which statement about refreshing a semantic model from a data pipeline is TRUE?",
    "options": [
      "a) Only Import models can be refreshed from a pipeline",
      "b) A Semantic model refresh activity can be added so that the refresh runs after the data load completes",
      "c) The pipeline must call a notebook, because pipelines cannot refresh models",
      "d) The model refresh always has to be scheduled separately with a time buffer"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Direct Lake models can also be refreshed, which reframes them to the latest Delta version.",
      "b": "Is correct. Including the refresh activity in the pipeline creates a dependency so the model is refreshed only after the load succeeds.",
      "c": "Is not correct. A dedicated activity exists for semantic model refresh.",
      "d": "Is not correct. Time-based buffers are exactly what orchestration avoids."
    }
  },
  {
    "id": 77,
    "question": "Which sequence correctly orders a nightly process to avoid users seeing partially loaded data in a Direct Lake semantic model?",
    "options": [
      "a) Run VACUUM first, then refresh the model, then load the gold tables",
      "b) Refresh the model, then load the gold tables, then run maintenance",
      "c) Disable automatic updates on the model, load the gold tables, refresh the model to reframe it, and then optionally run table maintenance",
      "d) Keep automatic updates enabled, load the gold tables, and take no further action"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. VACUUM before the load does nothing useful and can remove versions still in use.",
      "b": "Is not correct. Refreshing before the load frames the model on old data.",
      "c": "Is correct. With automatic updates disabled, the model stays framed on the previous complete version during the load, and the explicit refresh reframes it to the new version in one step; maintenance can follow.",
      "d": "Is not correct. Automatic updates can reframe the model after an intermediate commit, so users might see partially loaded data."
    }
  },
  {
    "id": 78,
    "question": "A refresh of a large Import semantic model fails with an out-of-memory error on an F32 capacity. Which action addresses the ROOT cause with the least long-term cost?",
    "options": [
      "a) Switch every report to DirectQuery",
      "b) Disable the model's scheduled refresh",
      "c) Scale the capacity permanently to F256",
      "d) Reduce model size and enable incremental refresh so only recent partitions are processed"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Converting all reports to DirectQuery trades a refresh problem for a query performance problem.",
      "b": "Is not correct. Turning off refresh abandons the requirement.",
      "c": "Is not correct. Permanently oversizing capacity is expensive and leaves the inefficiency in place.",
      "d": "Is correct. Removing unnecessary columns, lowering cardinality, and refreshing only changed partitions reduces both memory pressure and refresh duration."
    }
  },
  {
    "id": 79,
    "question": "Which capability lets you refresh only the current month partition of a large fact table from an automated process?",
    "options": [
      "a) The Update from Git action",
      "b) The Refresh now button in the workspace list",
      "c) The enhanced refresh operation of the Power BI REST API",
      "d) A dataflow with fast copy enabled"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Git actions synchronize definitions, not data.",
      "b": "Is not correct. The interactive button performs a full model refresh.",
      "c": "Is correct. Enhanced refresh allows specifying tables, partitions, refresh type, parallelism, and commit behavior.",
      "d": "Is not correct. A dataflow loads data but does not control model partitions."
    }
  },
  {
    "id": 80,
    "question": "Which statement about Fabric item ownership and scheduled operations is TRUE?",
    "options": [
      "a) Schedules always run under the identity of the last user who opened the item",
      "b) Only Fabric administrators can own schedulable items",
      "c) Some items run under the owner's stored credentials, so ownership changes may be needed when staff leave",
      "d) Ownership is irrelevant because all schedules run as the capacity administrator"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Opening an item does not change the identity used by a schedule.",
      "b": "Is not correct. Any user with the appropriate role can own items.",
      "c": "Is correct. Items such as dataflows and semantic models run under an owner identity, and takeover keeps scheduled runs working when that identity is gone.",
      "d": "Is not correct. Capacity administration is not the execution identity."
    }
  },
  {
    "id": 81,
    "question": "Which statement about using a single workspace for development, test, and production is MOST accurate?",
    "options": [
      "a) It is supported and safe as long as items are named with suffixes",
      "b) It removes isolation, so untested changes can break production content and consumers",
      "c) It is required when using Git integration",
      "d) It is the recommended approach because it reduces the number of items to manage"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Naming conventions do not prevent consumers from reaching in-progress content or an accidental overwrite.",
      "b": "Is correct. Separate workspaces per stage provide the isolation that protects production consumers from development changes.",
      "c": "Is not correct. Git integration works with any number of workspaces.",
      "d": "Is not correct. Fewer items does not outweigh the loss of isolation."
    }
  },
  {
    "id": 82,
    "question": "Which artifact should be reviewed to identify long-running Spark notebook stages after a nightly failure?",
    "options": [
      "a) The Spark UI for the run, reachable from the Monitoring hub",
      "b) The Delta transaction log",
      "c) The deployment pipeline comparison view",
      "d) The Purview DLP policy report"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The Spark UI exposes jobs, stages, tasks, and shuffle metrics for a specific run and is linked from the Monitoring hub.",
      "b": "Is not correct. The Delta log describes file-level commits, not Spark stage timings.",
      "c": "Is not correct. Pipeline comparison shows item differences between stages.",
      "d": "Is not correct. DLP reports concern sensitive data policies."
    }
  },
  {
    "id": 83,
    "question": "Which approach gives testers a full copy of production warehouse data for a release test with almost no storage cost and in seconds?",
    "options": [
      "a) A pipeline that copies every table into a test warehouse",
      "b) A Dataflow Gen2 that replicates the tables nightly",
      "c) A shortcut from the test warehouse to the production warehouse",
      "d) Zero-copy clones of the production tables created with CREATE TABLE AS CLONE OF"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A full copy consumes time and storage proportional to the data volume.",
      "b": "Is not correct. Nightly replication is slower, costlier, and adds latency.",
      "c": "Is not correct. Shortcuts are not created inside a warehouse to duplicate its own writable tables for testing, and testers need to modify the data.",
      "d": "Is correct. Zero-copy clones reference the existing files at a point in time, so they are created almost instantly and consume extra storage only as they diverge."
    }
  },
  {
    "id": 84,
    "question": "A pipeline must send an alert to the on-call engineer only when the load activity fails. How should this be configured?",
    "options": [
      "a) Connect a notification activity to the load activity's failure path",
      "b) Schedule a separate pipeline that emails every morning",
      "c) Add a Wait activity after the load activity",
      "d) Enable retries so the failure never surfaces"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Activity dependency conditions such as On fail allow a notification activity to run only when the preceding activity fails.",
      "b": "Is not correct. A daily email is not conditional on the failure and delays awareness.",
      "c": "Is not correct. A Wait activity only pauses execution.",
      "d": "Is not correct. Retries help with transient errors but persistent failures must still be reported."
    }
  },
  {
    "id": 85,
    "question": "Which statement about the Fabric Monitoring hub is MOST accurate for operational support?",
    "options": [
      "a) It only tracks Power BI semantic model refreshes",
      "b) It shows only the current day's activity and cannot be filtered",
      "c) It can be filtered by item type, status, and time to locate failed runs and open their detailed logs",
      "d) It replaces the need for pipeline failure notifications"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It covers pipelines, notebooks, dataflows, Spark jobs, and more.",
      "b": "Is not correct. Historical runs are available and filters are provided.",
      "c": "Is correct. The hub supports filtering across item types and statuses and links to run details, logs, and Spark diagnostics.",
      "d": "Is not correct. Proactive notifications are still needed because nobody watches the hub continuously."
    }
  },
  {
    "id": 86,
    "question": "Which practice makes a data load safe to rerun after a mid-run failure?",
    "options": [
      "a) Appending rows without any key management",
      "b) Making the load idempotent, for example by overwriting the affected partition or using MERGE on business keys",
      "c) Increasing the activity timeout",
      "d) Disabling schema enforcement on the target table"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A blind append duplicates rows when rerun.",
      "b": "Is correct. Idempotent loads produce the same result when repeated, which makes retries and restarts safe.",
      "c": "Is not correct. A longer timeout does not make a partial load recoverable.",
      "d": "Is not correct. Relaxing schema enforcement increases the risk of corrupt data."
    }
  },
  {
    "id": 87,
    "question": "Which of the following is the BEST reason to keep raw source files in a bronze layer rather than deleting them after processing?",
    "options": [
      "a) They allow silver and gold layers to be rebuilt if a transformation defect is discovered",
      "b) They compress better than Delta tables",
      "c) They reduce the number of capacity units consumed by Spark",
      "d) They are required for Direct Lake models to work"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Retaining raw data provides the ability to reprocess history after fixing a bug or changing business rules.",
      "b": "Is not correct. Raw formats such as CSV usually compress worse than Parquet.",
      "c": "Is not correct. Keeping files does not by itself reduce compute consumption.",
      "d": "Is not correct. Direct Lake reads Delta tables, not raw files."
    }
  },
  {
    "id": 88,
    "question": "A team needs to know which capacity a workspace is using and to move it to a different capacity as part of a cost review. Who can perform the move?",
    "options": [
      "a) A workspace Admin who also has assignment (contributor) permissions on the target capacity, or a Fabric administrator",
      "b) Any workspace Contributor",
      "c) Any user with Build permission on the items",
      "d) Only the original creator of the workspace"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Changing the license mode or capacity of a workspace requires the workspace Admin role plus permission to assign workspaces to the target capacity; Fabric and capacity administrators can also reassign workspaces.",
      "b": "Is not correct. Contributors cannot change workspace settings.",
      "c": "Is not correct. Build permission is an item-level consumer permission.",
      "d": "Is not correct. Creation does not confer exclusive rights; the Admin role does."
    }
  },
  {
    "id": 89,
    "question": "Which statement about documenting a semantic model for self-service users is MOST accurate?",
    "options": [
      "a) Documentation should be kept only in an external wiki so the model stays small",
      "b) Descriptions on tables, columns, and measures surface to report authors and should be maintained as metadata",
      "c) Column descriptions prevent users from creating incorrect visuals",
      "d) Descriptions are visible only to workspace administrators"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. External-only documentation is rarely read at the point of use, and descriptions add negligible size.",
      "b": "Is correct. Descriptions stored on model objects appear in field lists and tooltips, which is where authors need them.",
      "c": "Is not correct. Documentation guides users but does not enforce correctness.",
      "d": "Is not correct. Descriptions are visible to report authors."
    }
  },
  {
    "id": 90,
    "question": "Which combination of Fabric features BEST supports a controlled release process with peer review and automated promotion?",
    "options": [
      "a) Deployment pipelines only, with production edits made directly when urgent",
      "b) OneLake File Explorer for copying item folders between workspaces",
      "c) Git integration with pull requests, plus deployment pipelines or REST API calls driven by a build pipeline",
      "d) Personal workspaces plus manual PBIX file sharing"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Direct production edits bypass review and create drift from source control.",
      "b": "Is not correct. Copying files does not create or update Fabric items correctly.",
      "c": "Is correct. Git provides review and history, while deployment pipelines or API-driven automation provide repeatable promotion between environments.",
      "d": "Is not correct. File sharing gives no review, history, or repeatable promotion."
    }
  },
  {
    "id": 91,
    "question": "An operational Azure SQL Database must be available for analytics in Fabric with near real-time latency and no pipeline to maintain. Which feature should you use?",
    "options": [
      "a) A Spark structured streaming job reading the transaction log",
      "b) A Copy job with an incremental watermark",
      "c) A Dataflow Gen2 scheduled every five minutes",
      "d) Mirroring of the Azure SQL Database into Fabric"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Fabric Spark cannot read an Azure SQL transaction log directly.",
      "b": "Is not correct. A Copy job still runs on a schedule and must be maintained.",
      "c": "Is not correct. A frequent dataflow adds latency, capacity consumption, and maintenance overhead.",
      "d": "Is correct. Mirroring continuously replicates the source database into OneLake as Delta tables with no user-managed pipeline."
    }
  },
  {
    "id": 92,
    "question": "Which of the following sources can be mirrored into Fabric?",
    "options": [
      "a) Any ODBC-compliant database",
      "b) Only Azure SQL Database",
      "c) Azure SQL Database, Azure Cosmos DB, Snowflake, and Azure Databricks Unity Catalog",
      "d) Flat files in Azure Blob Storage"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Generic ODBC sources are handled with pipelines or dataflows, not mirroring.",
      "b": "Is not correct. Several other sources are supported.",
      "c": "Is correct. Fabric mirroring supports a defined set of operational sources, including Azure SQL Database, Azure SQL Managed Instance, Azure Cosmos DB, Snowflake, and Azure Databricks catalogs.",
      "d": "Is not correct. Files are ingested with shortcuts, pipelines, or notebooks."
    }
  },
  {
    "id": 93,
    "question": "A team must analyze 40 TB of Parquet data that already exists in an Amazon S3 bucket, with minimal duplication and no ingestion schedule. What should they do?",
    "options": [
      "a) Create an S3 shortcut in a lakehouse and query the data in place",
      "b) Use a Copy activity to move the data into a lakehouse nightly",
      "c) Load the data into a KQL database with an eventstream",
      "d) Mirror the S3 bucket into a warehouse"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. An Amazon S3 shortcut exposes the data in OneLake without moving it; Spark can query the Parquet files in place, and T-SQL can read them with OPENROWSET or after shortcut transformation to Delta tables.",
      "b": "Is not correct. Copying 40 TB duplicates storage cost and introduces latency and ongoing maintenance.",
      "c": "Is not correct. KQL databases and eventstreams are designed for streaming telemetry, not bulk object storage.",
      "d": "Is not correct. Mirroring targets operational databases, not object storage buckets."
    }
  },
  {
    "id": 94,
    "question": "Which statement about querying a lakehouse shortcut with the SQL analytics endpoint is TRUE?",
    "options": [
      "a) Shortcuts to Delta tables appear as tables and can be queried with T-SQL",
      "b) Shortcut tables are never visible to the SQL analytics endpoint",
      "c) Only internal shortcuts can be queried, never external ones",
      "d) Shortcuts must first be copied into managed tables with a notebook"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A shortcut that points to a valid Delta table is exposed as a table and can be read with T-SQL.",
      "b": "Is not correct. Shortcut tables in the Tables area are discoverable by the endpoint.",
      "c": "Is not correct. External shortcuts to Delta data can also be queried.",
      "d": "Is not correct. No copy is required for querying."
    }
  },
  {
    "id": 95,
    "question": "You must ingest a folder of 5,000 gzip-compressed CSV files into a lakehouse table with the highest throughput and least code. Which option is MOST appropriate?",
    "options": [
      "a) A Copy activity in a pipeline that reads the compressed files and writes them directly to a lakehouse table",
      "b) A Power BI Desktop import and republish",
      "c) A KQL queryset with an external table",
      "d) Manually uploading the files through the lakehouse user interface"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. The Copy activity decompresses gzip files natively, scales across thousands of files, and can write directly to a Delta table in the lakehouse without any code.",
      "b": "Is not correct. Power BI Desktop is not an ingestion tool for lake storage.",
      "c": "Is not correct. KQL is aimed at telemetry analytics, not this batch file conversion.",
      "d": "Is not correct. Manual upload does not scale to thousands of files and is not repeatable."
    }
  },
  {
    "id": 96,
    "question": "Which statement BEST describes the Copy job item in Fabric?",
    "options": [
      "a) It is a Spark application that must be written in PySpark",
      "b) It provides a guided experience for full or incremental data movement without building a pipeline",
      "c) It is a semantic model refresh wrapper",
      "d) It is the only supported way to load a warehouse"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. A Copy job requires no code.",
      "b": "Is correct. A Copy job is a simplified item for moving data from a source to a destination, supporting full and incremental copy patterns.",
      "c": "Is not correct. Model refresh is unrelated.",
      "d": "Is not correct. Warehouses can be loaded with COPY INTO, pipelines, dataflows, and notebooks as well."
    }
  },
  {
    "id": 97,
    "question": "Which Fabric ingestion option is the BEST fit for continuously capturing device telemetry arriving through Azure Event Hubs?",
    "options": [
      "a) A Copy activity scheduled every minute",
      "b) A zero-copy clone of the event hub",
      "c) An eventstream that routes events to an eventhouse",
      "d) A Dataflow Gen2 with fast copy"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Minute-level polling is inefficient and still not streaming.",
      "b": "Is not correct. Cloning applies to warehouse tables.",
      "c": "Is correct. Eventstreams ingest streaming sources such as Event Hubs and route them to destinations like an eventhouse, lakehouse, or activator.",
      "d": "Is not correct. Dataflows are batch oriented and not designed for continuous event capture."
    }
  },
  {
    "id": 98,
    "question": "A Dataverse environment holds Dynamics 365 sales data that must be analyzed in Fabric without building an export pipeline. Which approach should be used?",
    "options": [
      "a) Use the Dataverse link to Fabric so the tables appear in OneLake as Delta tables",
      "b) Recreate the Dataverse tables in a warehouse manually",
      "c) Export Dataverse to CSV nightly and copy it into a lakehouse",
      "d) Query Dataverse through DirectQuery from a semantic model only"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The Dataverse link exposes Dataverse tables in OneLake as Delta tables that all Fabric engines can read.",
      "b": "Is not correct. Manual recreation duplicates schema maintenance and data.",
      "c": "Is not correct. CSV export introduces latency, cost, and a pipeline to maintain.",
      "d": "Is not correct. DirectQuery limits engines to the semantic model and places load on the operational system."
    }
  },
  {
    "id": 99,
    "question": "Which factor MOST strongly favors copying data into Fabric rather than creating a shortcut to it?",
    "options": [
      "a) A requirement for the lowest possible data latency",
      "b) The wish to avoid managing a schedule",
      "c) The desire to reduce storage cost",
      "d) The need to isolate analytical reads from a source that cannot tolerate additional load, or that will be retired"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Shortcuts read the current data with no copy latency.",
      "b": "Is not correct. Shortcuts avoid schedules; copies require them.",
      "c": "Is not correct. Shortcuts, not copies, minimize storage.",
      "d": "Is correct. Copying decouples analytics from the source system and preserves the data if the source disappears, which are the main reasons to accept duplication."
    }
  },
  {
    "id": 100,
    "question": "Which statement about the Copy data activity is TRUE?",
    "options": [
      "a) It requires the source and destination to have identical schemas",
      "b) It can perform complex joins and aggregations between multiple sources",
      "c) It supports source and destination mapping, staging, and fault tolerance settings for skipping incompatible rows",
      "d) It can only write to a lakehouse"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Explicit mapping handles differing schemas.",
      "b": "Is not correct. Complex transformation belongs to dataflows, notebooks, or T-SQL.",
      "c": "Is correct. The activity provides column mapping, optional staging, and fault tolerance options such as skipping incompatible rows.",
      "d": "Is not correct. It supports many destinations, including warehouse, lakehouse, KQL database, and external stores."
    }
  },
  {
    "id": 101,
    "question": "You have a Fabric workspace that contains a data pipeline named Pipeline1 and a warehouse named Warehouse1. Pipeline1 must copy 60 tables from an Azure SQL database to a lakehouse by using identical logic. New source tables will be added every month. You need to minimize development and maintenance effort. What should you do?",
    "options": [
      "a) Create 60 pipelines, one for each table",
      "b) Create a notebook that hardcodes the 60 table names in a Python list",
      "c) Store the table list in a control table in Warehouse1, read it with a Lookup activity, and iterate over it with a ForEach activity that contains one parameterized Copy data activity",
      "d) Add 60 Copy data activities to Pipeline1"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Sixty pipelines multiply maintenance for every logic change.",
      "b": "Is not correct. Hardcoded lists require code changes for every new table.",
      "c": "Is correct. Metadata-driven design with Lookup and ForEach means new tables are added as rows in the control table, not as new code.",
      "d": "Is not correct. A large static pipeline is difficult to maintain and extend."
    }
  },
  {
    "id": 102,
    "question": "You have a Fabric warehouse named Warehouse1 that contains a table named dbo.Watermark. The table stores the last loaded ModifiedDate value for each source table. You are building a data pipeline that must load only rows changed since the previous run. You need the pipeline to retrieve the watermark value before the Copy data activity runs. Which activity should you add first?",
    "options": [
      "a) Wait activity",
      "b) Web activity",
      "c) Set variable activity",
      "d) Lookup activity"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Wait only pauses the pipeline.",
      "b": "Is not correct. Web activity calls REST endpoints, not a database control table.",
      "c": "Is not correct. Set variable assigns a value that is already known to the pipeline.",
      "d": "Is correct. The Lookup activity retrieves a row or small result set from a source, which is the standard way to read a watermark."
    }
  },
  {
    "id": 103,
    "question": "You implement an incremental load in a Fabric data pipeline. The pipeline reads a watermark from a control table, copies rows where ModifiedDate is greater than the watermark, and then updates the watermark. A run fails while the Copy data activity is running. You need to ensure that the next run does not skip any changed rows. What should you do?",
    "options": [
      "a) Update the watermark at the start of the pipeline, before the Copy data activity runs",
      "b) Update the watermark in a Stored procedure activity that runs only on success of the Copy data activity, setting it to the highest ModifiedDate value that was copied",
      "c) Store the watermark in a parameter of the downstream semantic model",
      "d) Remove the watermark and rely on the primary key of the source table to identify new rows"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. If the watermark advances before the copy and the copy then fails, the rows of the failed window are skipped on the next run.",
      "b": "Is correct. Advancing the watermark only after a successful copy makes the pattern safe to rerun: a failed run leaves the old watermark in place, so the same window is read again.",
      "c": "Is not correct. The watermark is pipeline state and belongs in a control table, not in a reporting model that the pipeline cannot update reliably.",
      "d": "Is not correct. A primary key identifies rows but does not indicate which rows are new or changed since the last load."
    }
  },
  {
    "id": 104,
    "question": "You have a Fabric lakehouse that contains a Delta table named dim_customer. Each day, a source system delivers a full extract of all customers. You need dim_customer to preserve the history of changes to the City and Segment attributes as a type 2 slowly changing dimension. What should you implement in a notebook?",
    "options": [
      "a) Append the full extract to dim_customer every day",
      "b) A MERGE statement that compares the extract with the current rows, expires the changed rows, and inserts new versions of them",
      "c) Overwrite dim_customer with the extract every day",
      "d) Truncate dim_customer and reload only the rows that changed"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Appending full extracts duplicates unchanged rows every day.",
      "b": "Is correct. A MERGE that detects changes and writes new versioned rows implements the required type 2 history.",
      "c": "Is not correct. Overwriting destroys the history that is required.",
      "d": "Is not correct. Truncating removes history and the extract does not identify changed rows by itself."
    }
  },
  {
    "id": 105,
    "question": "You have a Fabric lakehouse named Lakehouse1. Source systems deliver daily CSV and JSON files to the Files section of Lakehouse1. Analysts will query the curated layer by using the SQL analytics endpoint and a Direct Lake semantic model. You need to choose the storage format for the curated layer that minimizes the data read by queries. What should you use?",
    "options": [
      "a) CSV files in the Files section",
      "b) Delta tables in the Tables section",
      "c) Excel workbooks in the Files section",
      "d) JSON files in the Files section"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. CSV has no column types, compression, or column pruning, and files in the Files section are not exposed as tables to the SQL analytics endpoint or Direct Lake.",
      "b": "Is correct. Delta tables store columnar, compressed Parquet files, support column pruning and file skipping, and are the format the SQL analytics endpoint and Direct Lake read.",
      "c": "Is not correct. Excel workbooks are unsuitable for analytical storage at volume and cannot be read by Direct Lake.",
      "d": "Is not correct. JSON is verbose and expensive to parse repeatedly; it is acceptable in a raw landing zone but not in a curated layer."
    }
  },
  {
    "id": 106,
    "question": "You are designing a medallion architecture in a Fabric lakehouse named Lakehouse1. Source systems deliver CSV files, JSON files, and images that must be kept in their original form before they are processed into Delta tables. Where should you store the incoming files?",
    "options": [
      "a) In the Files section of Lakehouse1",
      "b) As views in the SQL analytics endpoint of Lakehouse1",
      "c) In the Tables section of Lakehouse1",
      "d) In the semantic model that uses Lakehouse1"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The Files section holds arbitrary files in any format, which makes it the landing and staging zone of the lakehouse.",
      "b": "Is not correct. Views are metadata objects in the SQL analytics endpoint and cannot store files.",
      "c": "Is not correct. The Tables section is for Delta tables; raw files of mixed formats such as images do not belong there.",
      "d": "Is not correct. A semantic model stores model metadata and imported data, not raw source files."
    }
  },
  {
    "id": 107,
    "question": "You plan to load data into a Fabric warehouse named Warehouse1 by using the COPY INTO statement. Which statement about COPY INTO is true?",
    "options": [
      "a) It requires an active Spark session in the workspace",
      "b) It can only read files that are stored in the same workspace as Warehouse1",
      "c) It bulk loads CSV, Parquet, and JSONL files from Azure Data Lake Storage Gen2, Azure Blob Storage, or OneLake with high throughput",
      "d) It converts the target table to a lakehouse table"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. COPY INTO is a T-SQL statement executed by the warehouse engine and does not use Spark.",
      "b": "Is not correct. External Azure Data Lake Storage Gen2 and Blob Storage locations are supported, and OneLake sources can be in another workspace if the user has the required permissions.",
      "c": "Is correct. In Fabric Data Warehouse, COPY INTO supports CSV, Parquet, and JSONL files from ADLS Gen2, Azure Blob Storage, and OneLake, and is the high-throughput T-SQL ingestion method.",
      "d": "Is not correct. The target remains a warehouse table."
    }
  },
  {
    "id": 108,
    "question": "Business analysts must ingest data from a SharePoint list and an Excel file, merge and unpivot the data, and load about 200,000 rows each day into a table in a Fabric lakehouse. The analysts are familiar with Power Query and do not write code. Which Fabric item should they use?",
    "options": [
      "a) An eventstream",
      "b) A Dataflow Gen2",
      "c) A data pipeline with a Copy data activity",
      "d) A notebook"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Eventstreams ingest and process streaming events, not daily file and list extracts.",
      "b": "Is correct. Dataflow Gen2 combines many connectors with the low-code Power Query transformation experience and can write the result directly to a lakehouse table.",
      "c": "Is not correct. The Copy data activity moves data but provides no merge or unpivot transformations.",
      "d": "Is not correct. A notebook requires code skills that the analysts do not have."
    }
  },
  {
    "id": 109,
    "question": "You have a Dataflow Gen2 that loads a query named DimProduct into an existing table in a Fabric lakehouse. You configure the data destination with manual settings and the Replace update method. What happens during each refresh?",
    "options": [
      "a) The destination table's data is replaced by the query output",
      "b) A new table is created with a timestamp suffix",
      "c) Only changed rows are merged into the destination",
      "d) New rows are added and existing rows are left untouched"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. Replace overwrites the destination table contents with the current query result.",
      "b": "Is not correct. The destination table name stays the same.",
      "c": "Is not correct. Dataflow destinations do not perform key-based merges.",
      "d": "Is not correct. That describes the Append method."
    }
  },
  {
    "id": 110,
    "question": "You have a Dataflow Gen2 that ingests about 400 GB of Parquet files from Azure Data Lake Storage Gen2 into a Fabric lakehouse. The only transformations are column selection and renaming. The refresh takes several hours. You need to reduce the refresh duration without rebuilding the solution. What should you do?",
    "options": [
      "a) Install an on-premises data gateway and route the connection through it",
      "b) Change the update method of the data destination from Replace to Append",
      "c) Enable Fast copy for the dataflow",
      "d) Increase the refresh frequency of the dataflow"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A gateway adds a network hop for a cloud source and does not increase throughput.",
      "b": "Is not correct. The update method controls whether data is replaced or appended, not how fast it is moved.",
      "c": "Is correct. Fast copy uses the pipeline copy engine instead of the mashup engine when the source, transformations, and destination are supported, which greatly improves throughput for large volumes.",
      "d": "Is not correct. Refreshing more often does not shorten each refresh."
    }
  },
  {
    "id": 111,
    "question": "You have a Fabric workspace that contains a data pipeline. The pipeline must copy data from a SQL Server 2019 instance hosted in your company's datacenter. The server is not reachable from the internet. What should you configure?",
    "options": [
      "a) An on-premises data gateway with a connection configured in Fabric",
      "b) Trusted workspace access",
      "c) A managed private endpoint",
      "d) A OneLake shortcut to the SQL Server"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The on-premises data gateway provides connectivity from Fabric to network-isolated on-premises sources.",
      "b": "Is not correct. Trusted workspace access applies to firewalled Azure storage accounts.",
      "c": "Is not correct. Managed private endpoints reach Azure resources in a virtual network, not on-premises servers.",
      "d": "Is not correct. Shortcuts cannot target a relational server."
    }
  },
  {
    "id": 112,
    "question": "You have a notebook that appends a daily DataFrame to a Delta table named sales in a Fabric lakehouse by using df.write.format(\"delta\").mode(\"append\").saveAsTable(\"sales\"). The source system adds a new column named discount_code, and the write now fails with a schema mismatch error. You need the table to accept the new column while preserving the existing data. What should you do?",
    "options": [
      "a) Change the write mode to overwrite",
      "b) Add .option(\"mergeSchema\", \"true\") to the write operation",
      "c) Run OPTIMIZE on the sales table before the write",
      "d) Drop the sales table and recreate it from the daily DataFrame"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. Overwrite replaces the existing data, which violates the requirement to preserve it.",
      "b": "Is correct. Delta enforces the table schema by default; the mergeSchema option explicitly allows schema evolution so the new column is added and existing rows get null values.",
      "c": "Is not correct. OPTIMIZE compacts files and does not change the table schema.",
      "d": "Is not correct. Recreating the table from one day of data loses the history."
    }
  },
  {
    "id": 113,
    "question": "A notebook ingests small micro-batches every five minutes into a Delta table in a Fabric lakehouse. After several weeks, queries from the SQL analytics endpoint and a Direct Lake semantic model slow down, and the table contains thousands of small Parquet files. What should you do?",
    "options": [
      "a) Increase the number of Spark executors used by the notebook",
      "b) Store the data as CSV files instead of Delta",
      "c) Ensure optimize write is enabled, batch the ingestion where possible, and run OPTIMIZE on the table as scheduled maintenance",
      "d) Partition the table by the transaction ID column"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. More executors typically produce more output files, not fewer.",
      "b": "Is not correct. Changing format abandons Delta features and does not solve file sizing.",
      "c": "Is correct. Optimize write sizes output files well, and periodic compaction keeps the layout healthy.",
      "d": "Is not correct. High-cardinality partitioning is a classic cause of small files."
    }
  },
  {
    "id": 114,
    "question": "You have an eventhouse that contains a KQL database named KQLDB1. Data engineers want to analyze KQLDB1 data from a lakehouse notebook and from a Direct Lake semantic model without building a copy process. What should you do?",
    "options": [
      "a) Export the KQLDB1 tables to CSV files every night",
      "b) Create a Dataflow Gen2 that copies KQLDB1 tables to a warehouse",
      "c) Enable OneLake availability for KQLDB1 and create shortcuts to its tables in a lakehouse",
      "d) Configure mirroring for KQLDB1"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Nightly exports create a copy process and stale data.",
      "b": "Is not correct. A dataflow builds a copy process, which the requirement excludes.",
      "c": "Is correct. OneLake availability exposes KQL database tables as Delta tables in OneLake, and shortcuts make them available to Spark, the SQL analytics endpoint, and Direct Lake without copying.",
      "d": "Is not correct. Mirroring replicates external operational databases into Fabric; it is not used to expose a KQL database to other engines."
    }
  },
  {
    "id": 115,
    "question": "You configure a Copy data activity in a Fabric data pipeline to load data from an on-premises SQL Server, through an on-premises data gateway, into a Fabric warehouse. The activity settings include an option to enable staging. Which statement describes staging correctly?",
    "options": [
      "a) Staging is mandatory for every copy operation",
      "b) Staging validates the business rules of the data",
      "c) Staging writes the data to an interim location, which can be required or beneficial for certain source and sink combinations",
      "d) Staging encrypts the data at rest in the destination"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Many copies run without staging.",
      "b": "Is not correct. Business validation requires transformation logic.",
      "c": "Is correct. Interim staging is used when a direct path is unsupported or when it improves throughput, for example when loading certain sinks in bulk.",
      "d": "Is not correct. Encryption at rest is a platform feature, not a function of staging."
    }
  },
  {
    "id": 116,
    "question": "You need to land the raw JSON responses from a paginated REST API into the Files section of a bronze lakehouse every day. Which Fabric approach should you use?",
    "options": [
      "a) A notebook or pipeline that calls the API, handles pagination, and writes the raw responses to the Files area",
      "b) A semantic model with DirectQuery to the API",
      "c) A shortcut to the API endpoint",
      "d) A KQL database with an external table over the API"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. A notebook with Python, or a pipeline using Web and Copy activities, can iterate pages and land the raw payloads for later parsing.",
      "b": "Is not correct. Semantic models are not an ingestion mechanism for raw API payloads.",
      "c": "Is not correct. Shortcuts target storage locations, not REST APIs.",
      "d": "Is not correct. KQL external tables target storage, not arbitrary paginated APIs."
    }
  },
  {
    "id": 117,
    "question": "Your company plans to mirror an Azure SQL database into a workspace on an F64 capacity. The finance team asks how mirroring affects Fabric costs. Which statement is true?",
    "options": [
      "a) Replica storage is free up to 1 TB per capacity unit, and the background compute used for replication does not consume capacity",
      "b) Mirrored data is stored in a proprietary format that Spark cannot read",
      "c) Mirrored data is billed twice, once in the source and once as Fabric compute for every replicated row",
      "d) Mirroring does not require a running capacity, and queries against mirrored data are free"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Mirroring includes 1 TB of free mirroring storage per purchased CU (64 TB for F64), and the background replication compute is free; only querying the data and storage beyond the allowance are charged.",
      "b": "Is not correct. Mirrored tables are Delta tables in OneLake and can be read by Spark, T-SQL, and Direct Lake.",
      "c": "Is not correct. Replication compute is free in Fabric; source-side costs are independent of Fabric billing.",
      "d": "Is not correct. A running capacity is required for replication, and querying mirrored data with SQL, Spark, or Power BI consumes capacity at regular rates."
    }
  },
  {
    "id": 118,
    "question": "You are creating a Dataflow Gen2 in a Fabric workspace. Each query must be written to a different data store. Which set contains only supported Dataflow Gen2 data destinations?",
    "options": [
      "a) Eventstream and Activator",
      "b) Lakehouse, warehouse, KQL database, and Azure SQL database",
      "c) Power BI semantic model and paginated report",
      "d) Lakehouse, Power BI dashboard, and Activator"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Eventstream and Activator are Real-Time Intelligence items, not dataflow destinations.",
      "b": "Is correct. Dataflow Gen2 can write query output to destinations that include Fabric Lakehouse, Fabric Warehouse, Fabric KQL database, and Azure SQL databases.",
      "c": "Is not correct. Semantic models and reports consume data; they are not dataflow destinations.",
      "d": "Is not correct. The lakehouse is supported, but dashboards and Activator are not dataflow destinations."
    }
  },
  {
    "id": 119,
    "question": "A pipeline copies a table every night, but the source occasionally contains rows whose values do not fit the destination column types, causing the whole activity to fail. Which setting allows the load to continue and record the problem rows?",
    "options": [
      "a) Disable staging",
      "b) Change the activity timeout",
      "c) Enable fault tolerance to skip incompatible rows and log them to a storage location",
      "d) Increase the retry count"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Staging does not change type compatibility behavior.",
      "b": "Is not correct. The failure is not caused by duration.",
      "c": "Is correct. Fault tolerance settings let the Copy activity skip incompatible rows and write them to a log for investigation.",
      "d": "Is not correct. Retrying a deterministic type error fails again."
    }
  },
  {
    "id": 120,
    "question": "Your team must ingest data from a SaaS API that requires OAuth token refresh, custom pagination, and row-level data quality checks, and write the results to Delta tables in a Fabric lakehouse. The team has strong Python skills. Which approach should you use?",
    "options": [
      "a) A Dataflow Gen2 with Fast copy enabled",
      "b) A OneLake shortcut to the API",
      "c) Mirroring of the SaaS application",
      "d) A notebook that uses Python and PySpark"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Fast copy accelerates bulk movement from supported sources; it does not add custom authentication flows or complex validation logic.",
      "b": "Is not correct. Shortcuts target storage locations, not REST APIs.",
      "c": "Is not correct. Mirroring supports specific databases and open mirroring sources, not arbitrary SaaS APIs.",
      "d": "Is correct. A notebook gives full programmatic control over authentication, pagination, and validation, and the team has the required code skills, although it must build its own logging and error handling."
    }
  },
  {
    "id": 121,
    "question": "You have three data pipelines in a Fabric workspace: PL_Ingest, PL_Transform, and PL_Refresh. You create a parent pipeline that must run them in that order, and each pipeline must start only after the previous one succeeds. What should you use in the parent pipeline?",
    "options": [
      "a) Three separate schedules offset by one hour",
      "b) Invoke pipeline activities connected by On success dependencies",
      "c) A ForEach activity over the pipeline names",
      "d) A Script activity"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Fixed time offsets do not enforce dependencies and break when a step runs longer than expected.",
      "b": "Is correct. The Invoke pipeline activity runs a child pipeline, and On success dependencies enforce the required order.",
      "c": "Is not correct. ForEach iterates over items and does not express ordered dependencies between different pipelines cleanly.",
      "d": "Is not correct. The Script activity runs SQL statements against a data store."
    }
  },
  {
    "id": 122,
    "question": "Which statement about pipeline parameters and variables is TRUE?",
    "options": [
      "a) Parameters can only be strings, and variables can only be integers",
      "b) Parameters are supplied at run time and are read-only, while variables can be changed during the run",
      "c) Both parameters and variables can be modified by any activity",
      "d) Variables are supplied at run time and parameters are mutable"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Both support several data types.",
      "b": "Is correct. Parameters are inputs fixed for the duration of a run, while variables hold mutable state set with Set variable or Append variable.",
      "c": "Is not correct. Parameters cannot be reassigned inside a run.",
      "d": "Is not correct. The roles are reversed in this option."
    }
  },
  {
    "id": 123,
    "question": "You have a data pipeline that runs a notebook named NB_Load by using a Notebook activity. NB_Load must process only the date that the pipeline passes to it. The notebook contains a cell with the default assignment load_date = \"2026-01-01\". What should you do?",
    "options": [
      "a) Mark the cell as the parameters cell and add a base parameter named load_date to the Notebook activity",
      "b) Add a Set variable activity inside the notebook",
      "c) Use a Lookup activity to read the notebook cell",
      "d) Write the date to a text file in the lakehouse and read it in the notebook"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is correct. The Notebook activity passes base parameters that override the assignments in the cell marked as the parameters cell.",
      "b": "Is not correct. Set variable is a pipeline activity, not a notebook feature.",
      "c": "Is not correct. Lookup reads data from a data store, not notebook code.",
      "d": "Is not correct. A file-based workaround is unnecessary and fragile when native parameter passing exists."
    }
  },
  {
    "id": 124,
    "question": "A data pipeline contains a ForEach activity that runs a Copy data activity for 200 tables. The run is slow, and the monitoring view shows that each iteration starts only after the previous one finishes. What should you check first?",
    "options": [
      "a) Whether the destination table has statistics",
      "b) Whether the pipeline has a schedule",
      "c) Whether the ForEach is set to sequential, and the batch count if it is parallel",
      "d) Whether the source supports Parquet"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Statistics affect query plans, not loop concurrency.",
      "b": "Is not correct. Scheduling does not affect iteration concurrency.",
      "c": "Is correct. ForEach has a sequential option and a batch count for parallelism, which directly determines whether iterations overlap.",
      "d": "Is not correct. File format does not cause serialized iteration."
    }
  },
  {
    "id": 125,
    "question": "A Copy data activity in a nightly pipeline occasionally fails with HTTP 429 throttling errors from a source API. When the pipeline is rerun manually a few minutes later, it succeeds. You need to reduce failed runs with minimal effort. What should you do?",
    "options": [
      "a) Enable staging on the Copy data activity",
      "b) Increase the activity timeout to seven days",
      "c) Configure the Retry and Retry interval settings of the Copy data activity",
      "d) Enable fault tolerance to skip incompatible rows"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. Staging changes the data path but does not handle throttling errors from the source.",
      "b": "Is not correct. The activity fails quickly with an error; it does not time out.",
      "c": "Is correct. Retry with an interval re-executes only the failed activity after a delay, which resolves transient errors such as throttling.",
      "d": "Is not correct. Fault tolerance skips rows with data incompatibilities; it does not handle transient source errors."
    }
  },
  {
    "id": 126,
    "question": "You have a data pipeline named Pipeline1 in a Fabric workspace. Pipeline1 must run every weekday at 02:00 Central European Time. Where should you configure this?",
    "options": [
      "a) In the capacity settings",
      "b) In a cron expression inside a notebook",
      "c) In the pipeline's schedule settings, which include frequency, times, and time zone",
      "d) In the tenant settings"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Capacity settings govern compute, not item schedules.",
      "b": "Is not correct. Notebooks do not schedule pipelines.",
      "c": "Is correct. Each schedulable item, including a pipeline, has its own schedule with frequency, time, and time zone.",
      "d": "Is not correct. Tenant settings control feature availability."
    }
  },
  {
    "id": 127,
    "question": "You have a Dataflow Gen2, a notebook, and a semantic model in a Fabric workspace. Each item has its own schedule, at 01:00, 02:00, and 03:00. Occasionally the notebook starts before the dataflow finishes, and the report shows incomplete data. You need to ensure that each step starts only after the previous step succeeds. What should you do?",
    "options": [
      "a) Increase the gaps between the schedules to two hours",
      "b) Create a pipeline that runs Dataflow, Notebook, and Semantic model refresh activities connected by On success dependencies",
      "c) Enable high concurrency mode for the notebook",
      "d) Remove the dataflow schedule and keep the other schedules"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. Larger time buffers still fail whenever an upstream step runs longer than expected.",
      "b": "Is correct. Dependency-based orchestration in a pipeline guarantees the order regardless of how long each step takes.",
      "c": "Is not correct. High concurrency shares Spark sessions and does not create dependencies between items.",
      "d": "Is not correct. Without a schedule or orchestration the dataflow would not run at all."
    }
  },
  {
    "id": 128,
    "question": "You have an eventstream that ingests IoT telemetry into an eventhouse. About 40 percent of the events are heartbeat messages that are never analyzed. You need to remove the heartbeat messages at the lowest downstream cost. Where should you filter them?",
    "options": [
      "a) In the eventstream's event processing before the destination",
      "b) In each report's page filters",
      "c) In a semantic model measure",
      "d) In a nightly notebook that deletes the rows"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Filtering in the eventstream prevents unwanted events from being stored and processed at all, which is the cheapest place to remove them.",
      "b": "Is not correct. Report filters do not reduce storage or ingestion cost.",
      "c": "Is not correct. Measures filter at query time after the data has been stored.",
      "d": "Is not correct. Storing then deleting wastes ingestion and storage and adds a job to maintain."
    }
  },
  {
    "id": 129,
    "question": "You have an eventstream that receives temperature readings from sensors. You need to send a Microsoft Teams message when a sensor reading stays above 8 degrees for five minutes. What should you use?",
    "options": [
      "a) A KPI visual in a Power BI report",
      "b) A pipeline with a Wait activity",
      "c) An Activator rule on the eventstream data",
      "d) A subscription on a paginated report"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A visual displays a value but does not act on it continuously.",
      "b": "Is not correct. Pipelines orchestrate work rather than monitor conditions continuously.",
      "c": "Is correct. Activator monitors conditions over streaming or report data and triggers actions such as Teams messages, email, or item runs.",
      "d": "Is not correct. Subscriptions send scheduled report output."
    }
  },
  {
    "id": 130,
    "question": "Users need a single place in the Fabric portal to discover available data streams, such as Azure Event Hubs and existing eventstreams, and Fabric workspace item events, and to route them to an eventhouse. What should they use?",
    "options": [
      "a) The Monitoring hub",
      "b) The OneLake catalog",
      "c) The Real-Time hub",
      "d) A deployment pipeline"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. The Monitoring hub shows the run history of items such as pipelines and dataflows.",
      "b": "Is not correct. The OneLake catalog is for discovering and governing Fabric data items, not for connecting streaming sources.",
      "c": "Is correct. The Real-Time hub is the catalog where users discover data streams, Azure and Fabric events, and connect them to destinations such as an eventhouse.",
      "d": "Is not correct. Deployment pipelines move content between development, test, and production workspaces."
    }
  },
  {
    "id": 131,
    "question": "Report users on an F64 capacity complain that reports are slow every morning at 09:00, when a pipeline starts a ForEach activity that copies 200 tables in parallel. You need to reduce the impact on report users. What should you do?",
    "options": [
      "a) Increasing the ForEach batch count to the maximum",
      "b) Disabling smoothing for background operations",
      "c) Scheduling heavy batch ingestion outside peak interactive hours and keeping parallelism bounded",
      "d) Running all ingestion at 09:00 so failures are noticed immediately"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Unbounded parallelism increases the peak load.",
      "b": "Is not correct. Smoothing is a platform behavior and is not a user setting.",
      "c": "Is correct. Moving background work away from peak interactive periods and limiting concurrency protects the user experience.",
      "d": "Is not correct. Running heavy jobs at peak time is precisely what causes interactive delays."
    }
  },
  {
    "id": 132,
    "question": "A source file arrives in a folder with a name pattern that contains the load date. Which pipeline capability lets one Copy activity read the correct folder each day?",
    "options": [
      "a) A shortcut recreated every day by an administrator",
      "b) Dynamic content expressions that build the path from the pipeline's trigger or parameter values",
      "c) Staging enabled on the sink",
      "d) A fixed path with a comment describing the pattern"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Daily manual work is not an automation solution.",
      "b": "Is correct. Expressions such as concat and formatDateTime build paths dynamically from parameters and system variables.",
      "c": "Is not correct. Staging does not choose a source path.",
      "d": "Is not correct. A fixed path requires daily editing."
    }
  },
  {
    "id": 133,
    "question": "In a data pipeline, a Lookup activity named LookupWatermark has First row only selected and returns a column named LastModified. You need to use this value in the source query of a subsequent Copy data activity. Which expression should you use?",
    "options": [
      "a) @activity('LookupWatermark').output.firstRow.LastModified",
      "b) @pipeline().parameters.LastModified",
      "c) @variables('LookupWatermark')",
      "d) @activity('LookupWatermark').output.value"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is correct. When First row only is selected, the Lookup output exposes the row as firstRow, and the column is referenced by name.",
      "b": "Is not correct. This references a pipeline parameter, not the output of the Lookup activity.",
      "c": "Is not correct. Activity output is not stored in a variable automatically, and variables are referenced by variable name.",
      "d": "Is not correct. The value array is returned only when First row only is cleared, and it would not select a single column value."
    }
  },
  {
    "id": 134,
    "question": "A pipeline should proceed to a cleanup activity whether the load succeeded or failed. Which dependency condition should the cleanup activity use?",
    "options": [
      "a) On skip",
      "b) On completion",
      "c) On fail",
      "d) On success"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. On skip runs only when the predecessor was skipped.",
      "b": "Is correct. On completion runs regardless of whether the preceding activity succeeded or failed.",
      "c": "Is not correct. On fail runs only after a failure.",
      "d": "Is not correct. On success runs only after a successful activity."
    }
  },
  {
    "id": 135,
    "question": "Which statement about refreshing a Dataflow Gen2 is TRUE?",
    "options": [
      "a) A dataflow refresh always refreshes every dependent semantic model automatically",
      "b) A dataflow can be refreshed on its own schedule or invoked from a pipeline activity",
      "c) A dataflow can only be refreshed manually",
      "d) Dataflow refresh cannot be monitored"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Model refreshes are separate steps that must be scheduled or orchestrated.",
      "b": "Is correct. Dataflows support their own schedule and can also be invoked as an activity inside a pipeline for orchestration.",
      "c": "Is not correct. Scheduled and orchestrated refreshes are supported.",
      "d": "Is not correct. Dataflow refresh history appears in the Monitoring hub and in the item's refresh history."
    }
  },
  {
    "id": 136,
    "question": "Which statement correctly compares the lakehouse and the warehouse as a destination for a Dataflow Gen2 that loads a dimension table requiring full replacement each night?",
    "options": [
      "a) Only the warehouse supports the Replace update method",
      "b) Only the lakehouse supports the Replace update method",
      "c) Both support Replace, so the choice should be driven by how the curated layer is built and queried",
      "d) Neither supports Replace, so a notebook is required"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The lakehouse destination supports replacement as well.",
      "b": "Is not correct. The warehouse destination also supports replacement.",
      "c": "Is correct. Because both destinations support the required update method, the decision rests on the team's transformation language, DML needs, and consumption pattern.",
      "d": "Is not correct. Dataflow destinations handle this without custom code."
    }
  },
  {
    "id": 137,
    "question": "A developer needs an operational database in Fabric for a line-of-business application that performs frequent single-row inserts and updates. Analysts must query the same data by using Spark and Direct Lake without building an ETL process. What should the developer create?",
    "options": [
      "a) A mirrored Azure SQL Database",
      "b) A Fabric warehouse",
      "c) A SQL database in Fabric",
      "d) An eventhouse"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. A mirrored database is a read-only replica of a database that runs outside Fabric, so the application would still need a separate Azure SQL Database.",
      "b": "Is not correct. The warehouse is optimized for analytical workloads, not frequent single-row OLTP operations.",
      "c": "Is correct. SQL database in Fabric serves transactional workloads, and its data is automatically replicated to OneLake in Delta format for Spark, SQL, and Direct Lake.",
      "d": "Is not correct. An eventhouse is optimized for streaming and time-series analytics, not OLTP applications."
    }
  },
  {
    "id": 138,
    "question": "Which situation calls for a Spark structured streaming job rather than a scheduled batch notebook?",
    "options": [
      "a) A once-off historical backfill of five years of data",
      "b) A nightly full reload of a small dimension",
      "c) Continuous ingestion of files that arrive every few seconds, with exactly-once progress tracking",
      "d) A monthly financial close calculation"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A backfill is a one-time batch job.",
      "b": "Is not correct. A nightly reload is a batch pattern.",
      "c": "Is correct. Structured streaming with checkpointing is designed for continuous arrival and reliable progress tracking.",
      "d": "Is not correct. A monthly calculation is a batch workload."
    }
  },
  {
    "id": 139,
    "question": "What is the purpose of the checkpoint location in a Spark structured streaming job?",
    "options": [
      "a) To store the output data of the stream",
      "b) To hold the Delta transaction log",
      "c) To cache the dataframe in executor memory",
      "d) To record progress and state so the query can resume without reprocessing or losing data"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Output goes to the sink, such as a Delta table.",
      "b": "Is not correct. The Delta log lives with the table.",
      "c": "Is not correct. Caching is a separate, in-memory concept.",
      "d": "Is correct. Checkpoints persist offsets and state so a restarted query continues from where it stopped."
    }
  },
  {
    "id": 140,
    "question": "Which approach is BEST for landing multiple source systems into a lakehouse so that each system's raw data remains identifiable and reprocessable?",
    "options": [
      "a) Overwrite one shared raw table after every load",
      "b) Use a folder structure such as Files/raw/<system>/<entity>/<date> with immutable, append-only files",
      "c) Write all systems into a single folder with random file names",
      "d) Store only the transformed result and discard the raw payloads"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Overwriting destroys the ability to reprocess history.",
      "b": "Is correct. A predictable, partitioned, append-only raw structure preserves provenance and supports selective reprocessing.",
      "c": "Is not correct. A flat, unnamed structure makes lineage and reprocessing impossible.",
      "d": "Is not correct. Discarding raw data removes the safety net for transformation defects."
    }
  },
  {
    "id": 141,
    "question": "Which statement about reading a CSV file with Spark in a Fabric notebook is TRUE?",
    "options": [
      "a) Schema inference is always more accurate than an explicit schema",
      "b) Specifying an explicit schema avoids the cost and risk of schema inference",
      "c) Spark cannot read CSV files, only Parquet",
      "d) The header option is ignored by Spark"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Inference samples data and can pick different types as data changes.",
      "b": "Is correct. Providing a schema avoids an extra pass over the data and prevents types from changing between runs.",
      "c": "Is not correct. Spark reads many text formats, including CSV.",
      "d": "Is not correct. The header option controls whether the first row is treated as column names."
    }
  },
  {
    "id": 142,
    "question": "Which Fabric feature allows a notebook to run another notebook and pass parameters to it?",
    "options": [
      "a) The Script activity",
      "b) spark.sql",
      "c) The Web activity",
      "d) notebookutils.notebook.run"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Script activity runs SQL statements from a pipeline.",
      "b": "Is not correct. spark.sql executes SQL statements.",
      "c": "Is not correct. Web activity is a pipeline activity that calls REST endpoints.",
      "d": "Is correct. The notebookutils library provides notebook.run to execute another notebook with a timeout and parameter values."
    }
  },
  {
    "id": 143,
    "question": "Which statement about a Spark environment item is TRUE?",
    "options": [
      "a) It defines row-level security for lakehouse tables",
      "b) It can only be attached to Spark job definitions, not notebooks",
      "c) It replaces the need for a lakehouse",
      "d) It packages the Spark runtime version, Spark properties, and libraries so attached notebooks run reproducibly"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Data security is configured elsewhere.",
      "b": "Is not correct. Notebooks can also attach to an environment.",
      "c": "Is not correct. Environments configure compute, not storage.",
      "d": "Is correct. An environment captures runtime, configuration, and library dependencies for consistent execution."
    }
  },
  {
    "id": 144,
    "question": "A data engineering team needs faster notebook start-up for interactive development at the lowest capacity cost. Which combination should they use?",
    "options": [
      "a) The starter pool together with high concurrency mode for sessions of the same user",
      "b) A new environment for each notebook",
      "c) A custom pool with the largest node size and autoscale disabled",
      "d) A Spark job definition for every exploration"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. The pre-warmed starter pool starts in seconds, and high concurrency lets several notebooks share one session, reducing consumption.",
      "b": "Is not correct. Many environments add management overhead and slow session start when custom libraries are installed.",
      "c": "Is not correct. Large dedicated nodes consume more capacity and still start more slowly than the pre-warmed pool.",
      "d": "Is not correct. Batch job definitions are unsuitable for interactive exploration."
    }
  },
  {
    "id": 145,
    "question": "Which statement about custom Spark pools in Fabric is TRUE?",
    "options": [
      "a) They are the only way to run PySpark code",
      "b) They allow choosing node family and size, autoscale range, and dynamic executor allocation",
      "c) They require an Azure Databricks workspace",
      "d) They are created per notebook and cannot be reused"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The starter pool also runs PySpark.",
      "b": "Is correct. Custom pools expose node family and size, autoscale bounds, and dynamic allocation of executors.",
      "c": "Is not correct. Fabric Spark is native to the platform.",
      "d": "Is not correct. Pools are defined in workspace or capacity settings and reused by many items."
    }
  },
  {
    "id": 146,
    "question": "A team must ingest data from a source that supports only SFTP file drops. What is the MOST appropriate Fabric approach?",
    "options": [
      "a) Mirror the SFTP server",
      "b) Use an eventstream with a custom endpoint",
      "c) Use a pipeline Copy activity with the SFTP connector to land files in the lakehouse",
      "d) Create a shortcut to the SFTP server"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Mirroring applies to supported operational databases.",
      "b": "Is not correct. Eventstreams handle event sources, not file transfer protocols.",
      "c": "Is correct. The pipeline copy connector set includes SFTP, which lands the files into OneLake for further processing.",
      "d": "Is not correct. Shortcuts support specific storage targets, not SFTP servers."
    }
  },
  {
    "id": 147,
    "question": "Which statement about ingesting into a partitioned Delta table is MOST accurate?",
    "options": [
      "a) Partition columns should be low-cardinality values that queries commonly filter on, such as year or month",
      "b) Partition columns should be high-cardinality keys such as an order identifier",
      "c) Partitioning always improves performance regardless of column choice",
      "d) Partitioning removes the need for OPTIMIZE"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Effective partitioning uses low-cardinality columns that appear in filters so whole folders can be skipped.",
      "b": "Is not correct. High-cardinality partitioning creates a huge number of tiny partitions and files.",
      "c": "Is not correct. Poor partition choice degrades performance.",
      "d": "Is not correct. Compaction remains necessary as files accumulate."
    }
  },
  {
    "id": 148,
    "question": "What is the MAIN operational benefit of a metadata-driven ingestion framework?",
    "options": [
      "a) It eliminates the need for monitoring",
      "b) New sources are onboarded by adding configuration rows rather than by changing pipeline code",
      "c) It guarantees that no ingestion ever fails",
      "d) It removes the need for data validation"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Monitoring is still required.",
      "b": "Is correct. Driving behavior from configuration means onboarding is a data change, which is faster, testable, and less error prone than editing pipelines.",
      "c": "Is not correct. Sources still fail; the framework only makes handling consistent.",
      "d": "Is not correct. Validation remains an essential step."
    }
  },
  {
    "id": 149,
    "question": "Which statement about ingesting the SAME source into both a lakehouse and a warehouse is MOST accurate?",
    "options": [
      "a) It is required, because Spark cannot read warehouse tables",
      "b) It is required, because Direct Lake can only read warehouse tables",
      "c) It duplicates storage and logic, and is usually avoidable because both engines can read the same OneLake data",
      "d) It is impossible in Fabric"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Spark can read warehouse tables through OneLake.",
      "b": "Is not correct. Direct Lake reads Delta tables from lakehouses as well as warehouses.",
      "c": "Is correct. Because of OneCopy, a single curated copy can serve both engines, so deliberate duplication should be justified.",
      "d": "Is not correct. It is possible, just usually unnecessary."
    }
  },
  {
    "id": 150,
    "question": "A daily pipeline must skip processing entirely when the source folder contains no new files. Which construct implements this MOST cleanly?",
    "options": [
      "a) A Wait activity followed by an unconditional Copy activity",
      "b) A Copy activity with fault tolerance enabled",
      "c) A pipeline schedule set to run only when files exist",
      "d) A Get metadata activity followed by an If condition that branches on the child item count"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Waiting does not test for files and the copy would still run.",
      "b": "Is not correct. Fault tolerance handles bad rows, not empty folders.",
      "c": "Is not correct. A schedule always runs at the configured time; reacting to file arrival requires an event-based trigger, which is a different construct from a schedule, and the stem requires a daily run that checks for files.",
      "d": "Is correct. Get metadata retrieves the child items of the folder and the If condition decides whether the load branch executes."
    }
  },
  {
    "id": 151,
    "question": "You have a Fabric workspace that contains a Dataflow Gen2 named DF1. DF1 reads a 500-million-row table named dbo.Sales from an Azure SQL database and filters the rows to the last 30 days before loading them to a lakehouse. The refresh of DF1 takes several hours. In Power Query Online, the step folding indicator shows that the filter step is not folded, and View data source query is unavailable for that step. What is the MOST likely cause of the long refresh?",
    "options": [
      "a) Staging is disabled on the query",
      "b) The dataflow lacks a schedule",
      "c) The destination is a lakehouse instead of a warehouse",
      "d) Query folding is broken before the filter, so all rows are pulled into the mashup engine"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Staging affects where intermediate results are written, not folding of the source filter.",
      "b": "Is not correct. A schedule has no bearing on refresh duration.",
      "c": "Is not correct. The destination type does not determine whether the source filter is pushed down.",
      "d": "Is correct. When folding stops, the filter is applied locally after the whole table has been transferred, which explains both the missing native query and the long refresh."
    }
  },
  {
    "id": 152,
    "question": "You are developing a Dataflow Gen2 query that reads from an Azure SQL database. The query must transfer as little data as possible from the source and push as much work as possible to the source engine. Which approach should you use when ordering the query steps?",
    "options": [
      "a) Apply filters and column removals first, using native, foldable transformations before any custom function",
      "b) Add an index column early and then filter on it",
      "c) Convert the table to a list and back",
      "d) Buffer the table with Table.Buffer before filtering"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Placing foldable, selective operations at the start lets the source execute them and return less data.",
      "b": "Is not correct. Adding an index column typically breaks folding.",
      "c": "Is not correct. Conversions to non-tabular structures break folding.",
      "d": "Is not correct. Table.Buffer deliberately materializes the data locally and stops folding."
    }
  },
  {
    "id": 153,
    "question": "You edit a Dataflow Gen2 query in the Advanced editor and change one step to table.selectrows(Source, each [Year] = 2026). When you save the query, you receive an error stating that the name table.selectrows was not recognized. What is the cause of the error?",
    "options": [
      "a) M is case-sensitive, so the function must be written as Table.SelectRows",
      "b) The let expression must end with an in clause that references the first step",
      "c) The Advanced editor supports only one transformation step per query",
      "d) Filtering functions can run only in the semantic model at query time"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. M is a case-sensitive functional language, so table.selectrows and Table.SelectRows are different identifiers and only the correctly cased standard library function exists.",
      "b": "Is not correct. The in clause normally returns the last step, and referencing any step is syntactically valid, so it does not produce an unrecognized-name error.",
      "c": "Is not correct. A let expression chains many named steps in a single query.",
      "d": "Is not correct. M runs in the mashup engine during dataflow refresh, not in the semantic model at query time."
    }
  },
  {
    "id": 154,
    "question": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. The Files section of Lakehouse1 contains a folder named Sales2025 that stores 12 monthly CSV files with identical columns. A new file is added to the folder each month. You need to use a Dataflow Gen2 to load all the files into a single table, and new files must be included automatically without editing the dataflow. What should you do?",
    "options": [
      "a) Create one query per file, and then merge the queries on the file name",
      "b) Create one query per file, and then append the queries",
      "c) Connect to the most recent file only, and schedule the dataflow to refresh monthly",
      "d) Connect to the Sales2025 folder, and then use Combine files"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Merge joins tables side by side on key columns rather than stacking rows, and per-file queries do not pick up new files.",
      "b": "Is not correct. Append stacks the rows correctly, but a query per file must be added manually every month, which violates the requirement.",
      "c": "Is not correct. Loading only the latest file loses or overwrites the earlier months.",
      "d": "Is correct. Combine files on a folder source appends every file in the folder by using a generated transform function, so files added later are included on the next refresh."
    }
  },
  {
    "id": 155,
    "question": "You have a Dataflow Gen2 that contains two queries named Orders and Customers. You need to return only the orders whose CustomerID value does not exist in Customers so that the orphaned orders can be investigated. Which operation should you use?",
    "options": [
      "a) Append queries with Customers as the second table",
      "b) Merge queries with an inner join",
      "c) Merge queries with a full outer join",
      "d) Merge queries with a left anti join"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Append stacks the rows of both queries and performs no key matching.",
      "b": "Is not correct. An inner join returns only the orders that do have a matching customer, which is the opposite of the requirement.",
      "c": "Is not correct. A full outer join returns matched and unmatched rows from both tables, so additional filtering would be required.",
      "d": "Is correct. A left anti join returns only the rows from the first (left) query that have no match in the second query."
    }
  },
  {
    "id": 156,
    "question": "A source table has twelve columns named Jan through Dec holding monthly amounts. The fact table requires one row per month. Which transformation is needed?",
    "options": [
      "a) Unpivot the twelve month columns into attribute and value columns",
      "b) Transpose the table",
      "c) Pivot columns on the month columns",
      "d) Group by month"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Unpivot converts the wide monthly columns into a Month attribute column and an Amount value column.",
      "b": "Is not correct. Transpose swaps rows and columns wholesale and does not produce a tidy attribute-value shape.",
      "c": "Is not correct. Pivot would move row values into columns, which is the opposite direction.",
      "d": "Is not correct. Grouping aggregates existing rows and cannot create month rows from columns."
    }
  },
  {
    "id": 157,
    "question": "You have a Dataflow Gen2 query that reads an Excel table with the columns ProductID, ProductName, and one column per month, such as Jan2026 and Feb2026. A new month column is added to the source every month. You need the query to return one row per product per month and to keep working when new month columns appear. What should you do?",
    "options": [
      "a) Select ProductID and ProductName, and then select Unpivot other columns",
      "b) Select the month columns, and then select Remove other columns",
      "c) Select ProductID and ProductName, and then select Pivot column",
      "d) Select the existing month columns, and then select Unpivot only selected columns"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Unpivot other columns generates Table.UnpivotOtherColumns with the key columns listed explicitly, so any new month column is unpivoted automatically.",
      "b": "Is not correct. Removing the key columns loses the product information and does not reshape the month columns into rows.",
      "c": "Is not correct. Pivot turns row values into columns, which is the opposite of the required shape.",
      "d": "Is not correct. Unpivot only selected columns hardcodes the current month column names, so new month columns are left unpivoted."
    }
  },
  {
    "id": 158,
    "question": "Which practice reduces the risk that a Power Query refresh fails because a source column was renamed?",
    "options": [
      "a) Use Remove other columns with an explicit list of required columns, and handle missing fields deliberately",
      "b) Always select all columns and let the destination decide",
      "c) Disable schema checks in the destination",
      "d) Use Choose columns by position index"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Declaring the required columns makes the dependency explicit, and the failure becomes a clear, early signal that can be handled deliberately.",
      "b": "Is not correct. Selecting everything increases volume and still breaks downstream steps that reference the old name.",
      "c": "Is not correct. Turning off validation lets bad data propagate.",
      "d": "Is not correct. Positional selection silently picks the wrong data when the order changes."
    }
  },
  {
    "id": 159,
    "question": "You have a Dataflow Gen2 named DF1. DF1 contains a query named CleanCustomers that applies several non-foldable transformations to a large source table. Five other queries in DF1 reference CleanCustomers and load their results to a warehouse. The refresh of DF1 is slow because the source logic is evaluated repeatedly. What should you do?",
    "options": [
      "a) Disable staging for all the queries in DF1",
      "b) Set the update method of the five referencing queries to Append",
      "c) Add a Table.Buffer step to each of the five referencing queries",
      "d) Enable staging for CleanCustomers"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Disabling staging removes the materialized intermediate result, so each referencing query re-evaluates the source logic.",
      "b": "Is not correct. The update method controls how rows are written to the destination, not how often the source logic is evaluated.",
      "c": "Is not correct. Table.Buffer buffers data only within the evaluation of each query, so the source logic still runs once per referencing query and memory use increases.",
      "d": "Is correct. Staging materializes the CleanCustomers result in Fabric storage once, and the referencing queries read the staged data, which can also use the staging compute engine instead of recomputing the source logic."
    }
  },
  {
    "id": 160,
    "question": "You have a Dataflow Gen2 that loads a 300-million-row SQL Server table named Orders into a table in a Fabric lakehouse. You plan to configure incremental refresh for the query to reduce the refresh time. Which requirement must the query meet?",
    "options": [
      "a) It must contain an integer key column that is used to define the buckets",
      "b) Its data destination must be changed to a Fabric warehouse",
      "c) It must return a Date, DateTime, or DateTimeZone column to filter on, and its steps should fully fold to the source",
      "d) Its data destination update method must be set to Append"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Buckets are defined by a Date, DateTime, or DateTimeZone column, not by an integer or text key.",
      "b": "Is not correct. Fabric Lakehouse, Fabric Warehouse, and Azure SQL Database destinations all support incremental refresh.",
      "c": "Is correct. Incremental refresh filters data into buckets by a date or datetime column, and Microsoft recommends, and enables by default, the requirement that the query fully folds so the bucket filters are pushed to the source.",
      "d": "Is not correct. Replace is the only supported update method, because each changed bucket is deleted and reinserted in the destination."
    }
  },
  {
    "id": 161,
    "question": "A dataflow query produces errors in a numeric column because some source rows contain the text 'N/A'. Which approach keeps the load running while making the problem visible?",
    "options": [
      "a) Replace the invalid values, or keep errors in a separate query that is loaded to a quarantine table",
      "b) Change the column type to text and ignore the issue",
      "c) Remove the column from the query",
      "d) Disable error checking in the dataflow settings"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Cleaning the known bad values while routing genuine errors to a quarantine output keeps the pipeline running and the issues auditable.",
      "b": "Is not correct. Storing numbers as text pushes the problem downstream and breaks aggregation.",
      "c": "Is not correct. Dropping the column loses required data.",
      "d": "Is not correct. There is no such setting, and hiding errors is poor practice."
    }
  },
  {
    "id": 162,
    "question": "You are building a Dataflow Gen2 query that loads customer data. Before publishing, you need to review a column named CustomerEmail to see the percentage of valid, error, and empty values, the number of distinct and unique values, and the value distribution. What should you use in the Power Query editor?",
    "options": [
      "a) The Applied steps pane",
      "b) The Diagram view",
      "c) Column profile and column quality in the data preview",
      "d) The Advanced editor"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Applied steps lists transformations.",
      "b": "Is not correct. Diagram view shows how queries relate.",
      "c": "Is correct. Column quality, column distribution, and column profile summarize valid, error, and empty values, distinct and unique counts, and value distribution; by default they are based on the top 1,000 rows, and profiling can be switched to the entire data set.",
      "d": "Is not correct. The Advanced editor shows the M code."
    }
  },
  {
    "id": 163,
    "question": "You have a Dataflow Gen2 named DF1 that reads from a SQL database. DF1 is promoted from a development workspace to test and production workspaces, and each environment uses a different server and database. You need to avoid editing the M code of DF1 in every environment. What should you do?",
    "options": [
      "a) Store the server and database names as parameters in the downstream semantic model",
      "b) Hardcode the production server name and rely on the gateway to redirect requests",
      "c) Enable staging so that DF1 reads its source from the staging lakehouse of each workspace",
      "d) Replace the hardcoded server and database names with dataflow parameters and supply environment-specific values"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Semantic model parameters are not visible to the dataflow; parameters belong to the dataflow definition.",
      "b": "Is not correct. A gateway does not rewrite the server names used by a query, and hardcoding defeats environment separation.",
      "c": "Is not correct. Staging stores intermediate results of the dataflow and does not change the source system it connects to.",
      "d": "Is correct. Parameterizing connection values, and passing them at run time, for example through public parameters from a pipeline, keeps one dataflow definition that is promotable between environments."
    }
  },
  {
    "id": 164,
    "question": "Which transformation should be used to standardize inconsistent customer names such as 'Acme Ltd' and 'ACME Limited' during a merge?",
    "options": [
      "a) A fuzzy merge with a similarity threshold and a transformation table",
      "b) Removing duplicates by name",
      "c) A pivot on the name column",
      "d) An inner join on the exact name"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Fuzzy matching with a threshold and an optional transformation table is designed for approximate text matching.",
      "b": "Is not correct. Removing duplicates by an unstandardized name keeps the variants as separate customers.",
      "c": "Is not correct. Pivoting does not resolve name variants.",
      "d": "Is not correct. An exact join misses the variants entirely."
    }
  },
  {
    "id": 165,
    "question": "You have a Dataflow Gen2 that contains a query named BaseOrders. BaseOrders reads from a SQL Server database and applies several non-foldable transformations. Three other queries in the same dataflow reference BaseOrders. Staging is disabled for BaseOrders and it has no data destination. What happens when the dataflow is refreshed?",
    "options": [
      "a) The refresh fails, because queries can reference only queries in other dataflows",
      "b) BaseOrders is automatically written to a destination table before the referencing queries run",
      "c) The BaseOrders logic is evaluated against the source for each of the referencing queries",
      "d) BaseOrders is evaluated once and its result is stored in the staging lakehouse"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Referencing other queries within the same dataflow is a supported and common structuring technique.",
      "b": "Is not correct. A query is written to a destination only when a data destination is configured for it.",
      "c": "Is correct. Without staging, a referenced query is not materialized, so each referencing query re-evaluates its logic against the source, which is why staging matters for shared intermediate results.",
      "d": "Is not correct. Results are written to the staging lakehouse only when staging is enabled for the query."
    }
  },
  {
    "id": 166,
    "question": "Which situation is the clearest reason to move a transformation OUT of a dataflow and into a Spark notebook?",
    "options": [
      "a) A simple filter on a SQL table",
      "b) A join of two small lookup tables",
      "c) A rename of three columns",
      "d) A transformation over hundreds of millions of rows that needs distributed compute and custom logic"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A foldable filter is ideal work for a dataflow.",
      "b": "Is not correct. Small joins are handled well in Power Query.",
      "c": "Is not correct. Renaming columns is trivial in either tool.",
      "d": "Is correct. Very large volumes and complex logic favor distributed Spark processing over the mashup engine."
    }
  },
  {
    "id": 167,
    "question": "Which statement about data type assignment in Power Query is MOST accurate?",
    "options": [
      "a) Types should be set explicitly and as early as folding allows, because correct types affect storage, compression, and downstream behavior",
      "b) Types are irrelevant because the destination assigns them",
      "c) Decimal should always be used for keys",
      "d) Types should be left as Any so nothing fails"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Explicit, appropriate types improve correctness, storage efficiency, and predictability of downstream models.",
      "b": "Is not correct. The destination cannot infer business intent, and mistyped data may be rejected or coerced.",
      "c": "Is not correct. Floating point types are a poor choice for keys; integers are preferred.",
      "d": "Is not correct. Untyped columns cause silent errors and poor compression downstream."
    }
  },
  {
    "id": 168,
    "question": "Which approach BEST implements a reusable date dimension for several dataflows and models?",
    "options": [
      "a) Rely on the Auto date/time feature in each model",
      "b) Build one conformed date dimension table in the lakehouse or warehouse and reuse it everywhere",
      "c) Create a date table with a calculated table in every semantic model",
      "d) Generate a date table in each report with DAX"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Auto date/time creates hidden per-column tables, wastes memory, and gives no shared business attributes.",
      "b": "Is correct. A single physical, conformed date dimension gives consistent attributes and works with every storage mode.",
      "c": "Is not correct. A calculated date table can work in a semantic model, but duplicating the logic in every model risks divergence and the table is not available to dataflows, SQL, or Spark consumers.",
      "d": "Is not correct. Report-level date tables cannot be shared and multiply maintenance."
    }
  },
  {
    "id": 169,
    "question": "A gold table must contain one row per customer with their latest address. The silver table contains one row per address change. Which transformation logic is required?",
    "options": [
      "a) Remove duplicates on the customer identifier without ordering",
      "b) Append the rows to the gold table",
      "c) Group by customer and take the maximum address text",
      "d) Rank rows per customer by change date descending and keep the first row"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Unordered deduplication keeps an arbitrary row, which may not be the latest.",
      "b": "Is not correct. Appending produces multiple rows per customer.",
      "c": "Is not correct. The maximum of a text value is alphabetical and unrelated to recency.",
      "d": "Is correct. Ranking by the change date and keeping rank one deterministically selects the most recent address."
    }
  },
  {
    "id": 170,
    "question": "Which statement about the mashup engine's memory use during a dataflow refresh is MOST accurate?",
    "options": [
      "a) Non-foldable operations such as sorts, joins on transformed columns, and buffering can consume large amounts of memory and slow the refresh",
      "b) Memory use is constant regardless of the transformations",
      "c) The mashup engine never holds data in memory",
      "d) Memory use depends only on the destination type"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. When work cannot be folded, the engine performs it locally, and operations that require the whole table are the most costly.",
      "b": "Is not correct. Different transformations have very different costs.",
      "c": "Is not correct. Local evaluation requires memory.",
      "d": "Is not correct. The transformation logic dominates."
    }
  },
  {
    "id": 171,
    "question": "Which statement about transforming data in the warehouse with T-SQL rather than in a dataflow is MOST accurate?",
    "options": [
      "a) Set-based T-SQL such as CTAS and MERGE runs inside the warehouse engine, avoiding data movement through an external engine",
      "b) T-SQL transformations cannot be orchestrated by a pipeline",
      "c) Dataflows are always faster than T-SQL for large joins",
      "d) T-SQL in the warehouse cannot read lakehouse tables"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Processing where the data lives removes the round trip through the mashup engine and uses the warehouse's distributed execution.",
      "b": "Is not correct. Stored procedure and Script activities orchestrate T-SQL.",
      "c": "Is not correct. For large set-based work the warehouse engine generally outperforms the mashup engine.",
      "d": "Is not correct. Cross-database queries let a warehouse join lakehouse tables through their SQL analytics endpoints by using three-part names, for example within the same workspace."
    }
  },
  {
    "id": 172,
    "question": "A dataflow writes to a lakehouse table using Append, and the source occasionally resends yesterday's rows. What is the consequence and the appropriate fix?",
    "options": [
      "a) The refresh fails, and retries fix it",
      "b) There is no consequence, because Append deduplicates automatically",
      "c) The table becomes read-only until VACUUM is run",
      "d) Duplicates accumulate, so the load should be made idempotent, for example by replacing the affected window or merging on keys downstream"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. The refresh succeeds and silently duplicates rows.",
      "b": "Is not correct. Append performs no key-based deduplication.",
      "c": "Is not correct. VACUUM is unrelated to duplicate rows.",
      "d": "Is correct. Resent rows duplicate data, so the pattern must replace the window or apply a keyed merge to stay idempotent."
    }
  },
  {
    "id": 173,
    "question": "You have a Fabric workspace that contains a lakehouse named Lakehouse1 and a Direct Lake semantic model that connects to Lakehouse1 through its SQL analytics endpoint (Direct Lake on SQL). Every report needs a row-level Margin column calculated as SalesAmount minus TotalCost so that users can group and filter by margin bands. What should you do?",
    "options": [
      "a) A report-level measure in each report",
      "b) A DAX calculated column in the semantic model",
      "c) Compute it during transformation and store it in the gold table",
      "d) A visual-level calculation in each chart"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Report-level definitions duplicate logic and drift apart.",
      "b": "Is not correct. Direct Lake on SQL models do not support calculated columns that reference Direct Lake tables, and in other modes calculated columns still add model memory and processing overhead.",
      "c": "Is correct. Materializing the value once in the gold table during transformation makes it available to the Direct Lake model and to every other consumer with a single consistent definition.",
      "d": "Is not correct. Per-visual calculations are the least reusable option."
    }
  },
  {
    "id": 174,
    "question": "Which statement about combining files from a folder in Power Query is TRUE?",
    "options": [
      "a) It generates a sample transformation function applied to every file, so changing the sample changes all files",
      "b) It requires all files to have different columns",
      "c) It converts the files to Delta automatically",
      "d) It can only combine two files at a time"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The combine experience creates a helper query and a transform function based on a sample file, which is then applied to every file in the folder.",
      "b": "Is not correct. Consistent structure is what makes combining work.",
      "c": "Is not correct. Format conversion depends on the destination configuration.",
      "d": "Is not correct. It handles many files."
    }
  },
  {
    "id": 175,
    "question": "Which transformation is MOST appropriate to convert a nested JSON array of order lines into one row per line in a dataflow?",
    "options": [
      "a) Expand the list column into new rows, then expand the record into columns",
      "b) Group by",
      "c) Pivot columns",
      "d) Transpose"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Expanding the list to rows and then expanding the records to columns is the standard flattening sequence in Power Query.",
      "b": "Is not correct. Grouping aggregates rather than flattens.",
      "c": "Is not correct. Pivoting moves values into columns, not the reverse.",
      "d": "Is not correct. Transpose swaps rows and columns."
    }
  },
  {
    "id": 176,
    "question": "Which statement about the number of queries loaded to a destination in a dataflow is MOST accurate?",
    "options": [
      "a) Every query must have a destination configured",
      "b) Only intermediate helper queries should have destinations",
      "c) No query can have a destination if staging is enabled",
      "d) Only the queries that produce required output tables need destinations, while helper queries can remain as references"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Helper and staging queries often intentionally have no destination.",
      "b": "Is not correct. Helper queries are exactly the ones that usually do not need a destination.",
      "c": "Is not correct. Staging and destinations are independent settings.",
      "d": "Is correct. Configuring destinations only for the final outputs avoids writing unnecessary tables."
    }
  },
  {
    "id": 177,
    "question": "A team needs the SAME cleansing logic applied in a dataflow and in a Spark notebook. What is the BEST way to avoid divergence?",
    "options": [
      "a) Disable one of the tools",
      "b) Copy the logic into both tools and document it",
      "c) Rely on reviewers to keep the two implementations aligned",
      "d) Implement the cleansing once in the pipeline layer that produces the silver table, and have both consumers read that table"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Removing a tool does not address the shared-logic requirement.",
      "b": "Is not correct. Duplicated logic drifts apart no matter how well documented.",
      "c": "Is not correct. Manual alignment is unreliable over time.",
      "d": "Is correct. Applying the rules once and sharing the resulting curated table removes the duplication entirely."
    }
  },
  {
    "id": 178,
    "question": "Which statement about Dataflow Gen1 compared with Dataflow Gen2 is TRUE?",
    "options": [
      "a) Gen1 supports writing output to a warehouse, while Gen2 does not",
      "b) Gen1 and Gen2 are functionally identical",
      "c) Gen1 supports fast copy and Gen2 does not",
      "d) Gen2 adds configurable data destinations, fast copy, and a modern authoring experience"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Configurable destinations are a Gen2 capability.",
      "b": "Is not correct. There are substantial functional differences.",
      "c": "Is not correct. Fast copy belongs to Gen2.",
      "d": "Is correct. Gen2 introduced output destinations, fast copy, improved authoring, and better monitoring."
    }
  },
  {
    "id": 179,
    "question": "Which action would MOST likely break query folding against a SQL Server source?",
    "options": [
      "a) Renaming a column",
      "b) Adding a custom column that calls a user-defined M function",
      "c) Removing unused columns",
      "d) Filtering rows on an indexed date column"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Renaming folds as a column alias.",
      "b": "Is correct. Custom M functions have no SQL equivalent, so evaluation moves to the mashup engine and folding stops.",
      "c": "Is not correct. Column selection folds into the SELECT list.",
      "d": "Is not correct. A simple predicate on a column folds well."
    }
  },
  {
    "id": 180,
    "question": "A dataflow refresh succeeded but the destination table contains zero rows. What should be checked FIRST?",
    "options": [
      "a) Whether the lakehouse needs VACUUM",
      "b) Whether the query's filters, such as a date window or a parameter default, exclude all rows",
      "c) Whether the capacity is throttled",
      "d) Whether the semantic model requires refresh"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. VACUUM removes unreferenced files and does not empty a table.",
      "b": "Is correct. A successful refresh with no rows almost always means the logic filtered everything out, for example because a parameter or relative date window was wrong.",
      "c": "Is not correct. Throttling causes failures or delays, not a silently empty successful load.",
      "d": "Is not correct. Model refresh affects reporting, not the destination table contents."
    }
  },
  {
    "id": 181,
    "question": "You have a lakehouse that contains a Delta table named silver_customers. A notebook receives a daily DataFrame that contains new customers, changed customers, and customers flagged as deleted. You need to apply all the inserts, updates, and deletes to silver_customers in a single atomic, set-based operation. Which operation should you use?",
    "options": [
      "a) OPTIMIZE",
      "b) COPY INTO",
      "c) VACUUM",
      "d) MERGE"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. OPTIMIZE compacts files.",
      "b": "Is not correct. COPY INTO is a bulk-load statement used to ingest files into a Fabric warehouse; it does not match and update existing rows.",
      "c": "Is not correct. VACUUM removes unreferenced files.",
      "d": "Is correct. MERGE matches source rows against the target and performs the appropriate insert, update, or delete."
    }
  },
  {
    "id": 182,
    "question": "A silver load must keep history of changed customer attributes with validity dates and a current flag. Which pattern is being implemented?",
    "options": [
      "a) Junk dimension",
      "b) Snapshot fact table",
      "c) Slowly changing dimension type 1",
      "d) Slowly changing dimension type 2"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. A junk dimension consolidates low-cardinality flags.",
      "b": "Is not correct. A snapshot fact records measures at points in time, not dimension history.",
      "c": "Is not correct. Type 1 overwrites the previous value and keeps no history.",
      "d": "Is correct. Type 2 adds a new row per change with validity dates and a current indicator."
    }
  },
  {
    "id": 183,
    "question": "You have a lakehouse that contains a Delta table named Sales. A notebook appends small batches to Sales every few minutes, and the table now contains thousands of small Parquet files. Most queries filter on CustomerID, and query performance is degrading. What should you run?",
    "options": [
      "a) VACUUM Sales RETAIN 0 HOURS",
      "b) A refresh of the semantic model that reads Sales",
      "c) DESCRIBE HISTORY Sales",
      "d) OPTIMIZE Sales ZORDER BY (CustomerID)"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. VACUUM only removes files that are no longer referenced by the current version; it does not compact the active small files, and a zero-hour retention removes time travel capability.",
      "b": "Is not correct. Refreshing a model does not change the physical layout of the Delta table.",
      "c": "Is not correct. DESCRIBE HISTORY lists the table's past operations and does not change the data layout.",
      "d": "Is correct. OPTIMIZE compacts the small files into larger ones, and Z-ordering by CustomerID co-locates related values so file statistics can skip more data for the common filter."
    }
  },
  {
    "id": 184,
    "question": "A team runs VACUUM with a one-day retention immediately after every load. What is the MAIN risk?",
    "options": [
      "a) Time travel and recovery to earlier versions become impossible beyond one day, and long-running readers may fail",
      "b) Future writes will fail",
      "c) Queries will return duplicate rows",
      "d) The table's schema will be lost"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Aggressive vacuuming removes files needed for older versions, eliminating the recovery window and potentially breaking readers still using those files.",
      "b": "Is not correct. Writes continue to work.",
      "c": "Is not correct. VACUUM does not affect row visibility of the current version.",
      "d": "Is not correct. Schema lives in the transaction log and is retained."
    }
  },
  {
    "id": 185,
    "question": "You have a Fabric workspace created in 2026 that contains a lakehouse named Lakehouse1 and a Direct Lake semantic model. Notebooks that use the default Spark settings write the gold tables in Lakehouse1. Report queries against the model are slower than expected, and the tables are rarely written but read constantly. What should you do?",
    "options": [
      "a) Convert the gold tables to CSV files to reduce the write overhead",
      "b) Disable the Delta transaction log on the gold tables",
      "c) Enable V-Order for the gold tables and rewrite the existing files, for example by running OPTIMIZE with V-Order",
      "d) Remove all filters from the report visuals so that the model scans fewer files"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Direct Lake reads Delta tables only, and CSV files are not supported as model tables.",
      "b": "Is not correct. The transaction log is mandatory for Delta tables and for Direct Lake framing.",
      "c": "Is correct. New workspaces default to the write-optimized Spark settings with V-Order disabled, so enabling V-Order, which applies VertiPaq-compatible sorting, encoding, and compression at write time, and rewriting existing files improves Direct Lake read performance for read-heavy tables.",
      "d": "Is not correct. Removing filters makes queries read more data, not less."
    }
  },
  {
    "id": 186,
    "question": "For which table is DISABLING V-Order the most defensible choice?",
    "options": [
      "a) A gold fact table used by executive dashboards",
      "b) A high-volume bronze staging table written continuously and rarely queried directly",
      "c) A small reference table refreshed monthly",
      "d) A gold dimension table read by many Direct Lake reports"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Heavily queried gold tables benefit from V-Order.",
      "b": "Is correct. When write throughput matters and reads are rare, the write-time cost of V-Order is not justified.",
      "c": "Is not correct. The write cost is negligible for a small monthly load.",
      "d": "Is not correct. Direct Lake read performance is exactly where V-Order pays off."
    }
  },
  {
    "id": 187,
    "question": "Two hours ago, a notebook mistakenly deleted rows from a Delta table named Orders in a lakehouse. VACUUM has not run since then. You need to query the data as it existed before the delete with the least effort. What should you use?",
    "options": [
      "a) A restore from a backup that must first be configured for the lakehouse",
      "b) A query that uses VERSION AS OF or TIMESTAMP AS OF against Orders",
      "c) DESCRIBE DETAIL Orders",
      "d) A rerun of the notebook with the delete statement commented out"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Delta versioning comes from the transaction log and retained data files, so no separate backup is required.",
      "b": "Is correct. Delta time travel reads an earlier version by version number or timestamp while the underlying files are still retained.",
      "c": "Is not correct. DESCRIBE DETAIL returns table metadata such as location and file count, not historical rows.",
      "d": "Is not correct. Rerunning the notebook does not bring back rows that were already deleted from the table."
    }
  },
  {
    "id": 188,
    "question": "A notebook writes a dataframe whose column types differ from an existing Delta table and the write fails. Which statement explains the behavior?",
    "options": [
      "a) The lakehouse has run out of storage",
      "b) Delta tables are immutable and can never be appended to",
      "c) Delta requires a partition column to be specified for every write",
      "d) Delta enforces the table schema by default, so evolution must be requested explicitly"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. A capacity or storage issue produces a different error.",
      "b": "Is not correct. Appends are a normal Delta operation.",
      "c": "Is not correct. Partitioning is optional and unrelated to type mismatches.",
      "d": "Is correct. Schema enforcement protects the table, and options such as mergeSchema or overwriteSchema are required to change it deliberately."
    }
  },
  {
    "id": 189,
    "question": "Which Spark technique avoids a shuffle when joining a 2-billion-row fact table to a 5,000-row dimension?",
    "options": [
      "a) Broadcasting the dimension table to all executors",
      "b) Repartitioning the fact table by the join key",
      "c) Caching the fact table",
      "d) Coalescing the fact table to one partition"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. A broadcast join sends the small table to every executor so the large table is joined locally without shuffling.",
      "b": "Is not correct. Repartitioning itself causes a shuffle of the large table.",
      "c": "Is not correct. Caching does not remove the need to shuffle for the join.",
      "d": "Is not correct. Coalescing to one partition destroys parallelism."
    }
  },
  {
    "id": 190,
    "question": "In the Spark UI, one task in a stage runs ten times longer than all others. What is the MOST likely cause?",
    "options": [
      "a) Too many executors",
      "b) Data skew, where one key holds a disproportionate share of the rows",
      "c) The table having too few columns",
      "d) V-Order being disabled"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Extra executors do not create a single long task.",
      "b": "Is correct. Skewed key distribution gives one partition far more rows, so its task dominates the stage duration.",
      "c": "Is not correct. Column count does not cause a single slow task.",
      "d": "Is not correct. V-Order affects read efficiency, not task balance."
    }
  },
  {
    "id": 191,
    "question": "Which statement about Spark lazy evaluation is TRUE?",
    "options": [
      "a) Lazy evaluation prevents Spark from optimizing the plan",
      "b) Every transformation is executed immediately as it is written",
      "c) Transformations build a plan and execution starts only when an action such as write or count is invoked",
      "d) Actions are lazy and transformations are eager"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Laziness is what enables whole-plan optimization.",
      "b": "Is not correct. Transformations are recorded, not executed immediately.",
      "c": "Is correct. Deferred execution lets Spark optimize the whole chain before running it when an action requires results.",
      "d": "Is not correct. The roles are reversed."
    }
  },
  {
    "id": 192,
    "question": "A notebook reads a cleansed dataframe once and then writes three different aggregations from it, causing the source to be read three times. Which change is MOST appropriate?",
    "options": [
      "a) Convert the notebook to a Spark job definition",
      "b) Increase the number of shuffle partitions",
      "c) Disable optimize write",
      "d) Cache or persist the cleansed dataframe before the three writes"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. The item type does not change recomputation behavior.",
      "b": "Is not correct. Shuffle partitions affect parallelism, not repeated source reads.",
      "c": "Is not correct. Optimize write controls output file sizing.",
      "d": "Is correct. Persisting the reusable intermediate result prevents the source and preceding transformations from being recomputed for each action."
    }
  },
  {
    "id": 193,
    "question": "Which statement about the number of files produced by a Spark write is MOST accurate?",
    "options": [
      "a) It equals the number of columns in the dataframe",
      "b) It is always one file per table",
      "c) It cannot be influenced by configuration",
      "d) It depends on the number of output partitions, and features such as optimize write help produce well-sized files"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Column count is unrelated to file count.",
      "b": "Is not correct. A write usually produces one file per output partition.",
      "c": "Is not correct. Repartitioning and optimize write both influence it.",
      "d": "Is correct. Output partitions determine file count, and Fabric's optimize write adjusts them to produce reasonable file sizes."
    }
  },
  {
    "id": 194,
    "question": "Which sequence of maintenance operations on a heavily appended Delta table is CORRECT?",
    "options": [
      "a) OPTIMIZE to compact files, then VACUUM with an appropriate retention to remove the now-unreferenced small files",
      "b) VACUUM first, then OPTIMIZE, so compaction has fewer files to read",
      "c) VACUUM only, because it also compacts files",
      "d) OPTIMIZE only, because VACUUM corrupts the log"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Compaction creates new large files and leaves the old ones unreferenced, which VACUUM can then remove once the retention window allows.",
      "b": "Is not correct. Vacuuming before compaction leaves the small files in the current version and removes recovery options.",
      "c": "Is not correct. VACUUM does not merge files.",
      "d": "Is not correct. VACUUM is a supported maintenance command, not a corrupting one."
    }
  },
  {
    "id": 195,
    "question": "Which statement about Z-order is TRUE?",
    "options": [
      "a) It replaces the transaction log with an index",
      "b) It must be applied to every column of the table",
      "c) It guarantees that queries never read more than one file",
      "d) It co-locates related values of selected columns in the same files to improve data skipping"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The Delta log remains the source of truth.",
      "b": "Is not correct. Z-order is effective on a small number of frequently filtered columns.",
      "c": "Is not correct. It improves skipping but gives no such guarantee.",
      "d": "Is correct. Clustering related values together lets file-level statistics eliminate more files for filtered queries."
    }
  },
  {
    "id": 196,
    "question": "Which benefit does liquid clustering offer over classic Hive-style partitioning?",
    "options": [
      "a) It allows partition columns to be dropped from queries",
      "b) It removes the need for a transaction log",
      "c) It adapts the data layout to chosen clustering keys without the small-file and skew problems of over-partitioning",
      "d) It makes tables readable by every legacy reader"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Predicates are still needed for skipping.",
      "b": "Is not correct. Clustering works within the Delta protocol and its log.",
      "c": "Is correct. Liquid clustering avoids the rigid folder structure of partitioning and adapts as data grows and skews.",
      "d": "Is not correct. Newer table features can reduce compatibility with older readers."
    }
  },
  {
    "id": 197,
    "question": "What is the MAIN benefit of deletion vectors in a Delta table?",
    "options": [
      "a) They remove the need for MERGE",
      "b) They prevent all deletes",
      "c) They encrypt deleted rows",
      "d) They allow rows to be deleted without rewriting entire data files, which speeds up deletes and updates"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. MERGE is still the statement used to apply changes.",
      "b": "Is not correct. They make deletes cheaper, not impossible.",
      "c": "Is not correct. Encryption is unrelated.",
      "d": "Is correct. Deletion vectors record which rows are logically removed so files do not have to be rewritten immediately."
    }
  },
  {
    "id": 198,
    "question": "A warehouse transformation must create a new gold table from a join of three silver tables, as efficiently as possible. Which T-SQL approach is MOST appropriate?",
    "options": [
      "a) A series of single-row INSERT statements generated by an application",
      "b) A view, because views materialize data",
      "c) A cursor that inserts row by row",
      "d) A CREATE TABLE AS SELECT statement"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Many small inserts are inefficient and create excessive overhead.",
      "b": "Is not correct. A standard view does not store data.",
      "c": "Is not correct. Row-by-row processing is extremely slow in an analytical engine.",
      "d": "Is correct. CTAS is a single, set-based, minimally logged operation that creates and populates the table in one step."
    }
  },
  {
    "id": 199,
    "question": "You have a Fabric warehouse named Warehouse1 that contains a table named DimCustomer. You need to declare CustomerKey as the primary key so that the relationship metadata can be used by tools and the query optimizer. Which statement should you use?",
    "options": [
      "a) ALTER TABLE dbo.DimCustomer ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey) NOT ENFORCED",
      "b) ALTER TABLE dbo.DimCustomer ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "c) ALTER TABLE dbo.DimCustomer ADD CONSTRAINT PK_DimCustomer PRIMARY KEY (CustomerKey) ON DELETE CASCADE",
      "d) ALTER TABLE dbo.DimCustomer ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Fabric warehouse supports primary key, unique, and foreign key constraints only when they are declared NONCLUSTERED and NOT ENFORCED, so the load process must guarantee uniqueness.",
      "b": "Is not correct. Clustered primary keys are not supported in Fabric warehouse.",
      "c": "Is not correct. Cascading actions are not supported, and ON DELETE CASCADE applies to foreign keys, not primary keys.",
      "d": "Is not correct. Omitting NOT ENFORCED fails, because enforced constraints are not supported in Fabric warehouse."
    }
  },
  {
    "id": 200,
    "question": "You have a Fabric warehouse named Warehouse1. You are creating a dimension table named DimCustomer that must have an integer surrogate key generated automatically by the engine when rows are inserted. The solution must minimize development effort. How should you define the CustomerKey column?",
    "options": [
      "a) As an INT column populated by an AFTER INSERT trigger",
      "b) As a UNIQUEIDENTIFIER column populated by NEWID()",
      "c) As a BIGINT IDENTITY column",
      "d) As a BIGINT column populated by ROW_NUMBER() plus the current maximum key in every load procedure"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Triggers are not supported in Fabric warehouse.",
      "b": "Is not correct. A GUID is not an integer key, and wide random values compress and join poorly in a star schema.",
      "c": "Is correct. Fabric warehouse supports IDENTITY columns of type BIGINT, which generate unique positive values automatically; values are not guaranteed to be sequential, and seed and increment cannot be specified.",
      "d": "Is not correct. The ROW_NUMBER offset pattern works but must be implemented and maintained in every load, so it does not minimize development effort compared with IDENTITY."
    }
  },
  {
    "id": 201,
    "question": "You have a Fabric lakehouse named Lakehouse1 that contains a Delta table named silver_customer. Each incremental load appends a new row for every changed customer, so the table contains several rows per CustomerID that differ only in their attribute values and LoadTimestamp. In a PySpark notebook, you need to produce a DataFrame that contains only the most recent row for each CustomerID. What should you use?",
    "options": [
      "a) df.dropDuplicates()",
      "b) A window partitioned by CustomerID and ordered by LoadTimestamp descending, row_number(), and a filter that keeps row number 1",
      "c) df.distinct()",
      "d) df.groupBy(\"CustomerID\").agg() with max() applied to every column"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "1",
    "justification": {
      "a": "Is not correct. dropDuplicates() without a column subset removes only rows that are identical in every column, and the rows differ in LoadTimestamp and attributes.",
      "b": "Is correct. Ranking rows within each CustomerID by LoadTimestamp and keeping the first row selects exactly one complete, consistent row per business key.",
      "c": "Is not correct. distinct() also removes only fully identical rows, so every version of a customer is kept.",
      "d": "Is not correct. Taking the maximum of each column independently can combine values from different versions into a row that never existed."
    }
  },
  {
    "id": 202,
    "question": "You have a Fabric lakehouse that contains a Delta table named Sales. Two notebooks that are scheduled at the same time both write to Sales, and their changes touch the same files. What happens when the second notebook tries to commit?",
    "options": [
      "a) The Delta transaction log serializes the commits by using optimistic concurrency, and the conflicting write fails with a concurrency exception so it can be retried",
      "b) The entire lakehouse is locked until the first notebook finishes, so the second write waits automatically",
      "c) The table becomes permanently corrupted and must be restored from a backup",
      "d) Both writes silently succeed and their rows may interleave inconsistently"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Delta Lake uses optimistic concurrency control: commits are serialized through the transaction log and a write that conflicts with an already committed change raises a conflict exception that the job can retry.",
      "b": "Is not correct. Delta does not lock the whole lakehouse; concurrency is resolved per table at commit time.",
      "c": "Is not correct. ACID transactions in the log prevent a failed or conflicting write from corrupting the table.",
      "d": "Is not correct. Delta provides ACID guarantees, so conflicting writes are detected rather than silently interleaved."
    }
  },
  {
    "id": 203,
    "question": "You have a Fabric lakehouse named Lakehouse1. You create a table by running df.write.format(\"delta\").option(\"path\", \"Files/external/customers\").saveAsTable(\"customers_ext\"). Later, you run DROP TABLE customers_ext. What is the result?",
    "options": [
      "a) The table metadata and the Delta files in Files/external/customers are both deleted",
      "b) The statement fails because tables defined with an explicit path cannot be dropped",
      "c) The table metadata is removed, and the Delta files in Files/external/customers remain in place",
      "d) The Delta files are moved into the Tables area of Lakehouse1"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Deleting the underlying files is the behavior of a managed table, not of a table registered over an explicit path.",
      "b": "Is not correct. External (unmanaged) tables can be dropped like any other table.",
      "c": "Is correct. Specifying a path creates an external table; dropping it removes only the metastore entry, while the data files survive.",
      "d": "Is not correct. Dropping a table never relocates files."
    }
  },
  {
    "id": 204,
    "question": "You are the lead engineer for a Fabric data engineering team. Half of the team writes Spark SQL and the other half writes PySpark. You need to choose a language for new notebook transformations that write Delta tables in a lakehouse. Which statement should guide your decision?",
    "options": [
      "a) PySpark always performs better than Spark SQL for the same logic, so PySpark should be mandated",
      "b) Both APIs are compiled by the same Spark engine and optimizer, so the choice should be based mainly on team skills and maintainability",
      "c) Spark SQL cannot write Delta tables, so PySpark must be used for the final write",
      "d) Spark SQL and PySpark cannot be mixed in the same notebook, so one language must be chosen per lakehouse"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Equivalent logic produces the same optimized plan regardless of the API used.",
      "b": "Is correct. DataFrame and SQL code both go through the Catalyst optimizer to the same physical plan, so readability and skills should drive the choice.",
      "c": "Is not correct. Spark SQL supports CREATE TABLE AS SELECT, INSERT, and MERGE on Delta tables.",
      "d": "Is not correct. Cell magic commands such as %%sql allow languages to be mixed within one notebook."
    }
  },
  {
    "id": 205,
    "question": "You have a Fabric data pipeline that runs a notebook to load a silver table named silver_orders and then runs a second notebook that builds gold tables. You need to ensure that if duplicate OrderID values exist in silver_orders, the pipeline run fails and the gold tables are not updated. What should you do?",
    "options": [
      "a) Enable V-Order on silver_orders",
      "b) Run OPTIMIZE with ZORDER BY OrderID on silver_orders",
      "c) Add a cell to the first notebook that counts duplicate OrderID values and raises an exception when the count is greater than zero",
      "d) Enable schema evolution by writing with the mergeSchema option"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. V-Order is a write-time layout optimization and does not validate data.",
      "b": "Is not correct. Z-ordering co-locates data for faster reads and does not detect duplicates.",
      "c": "Is correct. Raising an exception fails the notebook activity, so the dependent activity that builds gold tables does not run, which implements a data quality gate.",
      "d": "Is not correct. Schema evolution handles structural changes, not duplicate keys."
    }
  },
  {
    "id": 206,
    "question": "You have a Fabric lakehouse named Lakehouse1 that contains a Delta table named FactSales. Frequent small appends have produced thousands of small Parquet files. You need to compact the files with V-Order applied and remove unreferenced files older than seven days. The solution must not require writing code. What should you use?",
    "options": [
      "a) The Load to Tables option on the Files folder",
      "b) The Refresh metadata option of the SQL analytics endpoint",
      "c) A OneLake shortcut to FactSales",
      "d) The Maintenance option for the table in Lakehouse explorer, with Optimize (V-Order) and VACUUM selected"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Load to Tables converts files into a Delta table; it does not compact an existing table.",
      "b": "Is not correct. Refreshing endpoint metadata synchronizes table definitions and does not rewrite files.",
      "c": "Is not correct. A shortcut only references data and does not change its layout.",
      "d": "Is correct. Table maintenance in Lakehouse explorer runs OPTIMIZE with optional V-Order and VACUUM with a retention threshold without code."
    }
  },
  {
    "id": 207,
    "question": "You have a Fabric lakehouse that contains a Delta table named FactOrders. FactOrders is partitioned by OrderDate at day level and contains five years of data, which has produced about 1,800 partitions that each contain a few small files. Queries that filter by month are slow. Which change is MOST likely to improve query performance?",
    "options": [
      "a) Repartition the table by CustomerID instead",
      "b) Create an index on the OrderDate column",
      "c) Partition at month or year level, or use clustering on OrderDate, and compact the files",
      "d) Remove all partitioning and write the table as a single Parquet file"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A high-cardinality key such as CustomerID makes the small-file fragmentation far worse.",
      "b": "Is not correct. Delta tables in Fabric rely on file statistics, partitioning, and clustering rather than secondary indexes.",
      "c": "Is correct. Coarser partitions or clustering combined with compaction produce well-sized files while still allowing partition pruning and data skipping.",
      "d": "Is not correct. A single file eliminates parallelism and data skipping."
    }
  },
  {
    "id": 208,
    "question": "You have a Fabric workspace that contains a mirrored database named Mirror1, which replicates an Azure SQL Database, and a lakehouse named Lakehouse1. Data engineers need to read the mirrored tables from a Spark notebook attached to Lakehouse1. The solution must avoid copying data. What should you do?",
    "options": [
      "a) Use a pipeline Copy activity to copy the mirrored tables into Lakehouse1",
      "b) Query the tables only through the SQL analytics endpoint of Mirror1 by using T-SQL",
      "c) Create OneLake shortcuts in Lakehouse1 that point to the mirrored tables, and read them as Delta tables",
      "d) Export the mirrored tables to CSV files in the Files area of Lakehouse1"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Copying duplicates the data, which violates the requirement.",
      "b": "Is not correct. Mirrored data is not limited to T-SQL; Spark can read it as well.",
      "c": "Is correct. Mirroring lands data as Delta tables in OneLake, so shortcuts expose them to Spark without any copy.",
      "d": "Is not correct. Exporting creates a copy in a less efficient format."
    }
  },
  {
    "id": 209,
    "question": "A source CRM system signals deletions by sending rows with IsDeleted = 1. The rows land in the bronze layer of a Fabric lakehouse, and a gold table named DimCustomer feeds a Direct Lake semantic model. Deleted customers must not appear in reports, and the bronze layer must retain everything the source sent for auditing. What should you do?",
    "options": [
      "a) Delete the flagged rows from the bronze table to save space",
      "b) Ignore the flag and keep all rows in every layer",
      "c) Add a filter on IsDeleted to every report that uses DimCustomer",
      "d) Apply a MERGE into the curated table that deletes or soft-deletes the matching rows, while keeping the raw records in bronze"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Bronze should remain an immutable record of what the source delivered.",
      "b": "Is not correct. Ignoring deletes leaves incorrect customers in the curated layer and in reports.",
      "c": "Is not correct. Filtering in each report duplicates logic and will be missed somewhere.",
      "d": "Is correct. Applying the delete once in the curated layer, while retaining the raw evidence in bronze, keeps every consumer correct and auditable."
    }
  },
  {
    "id": 210,
    "question": "You have a Fabric workspace that contains a warehouse named Warehouse1 and a lakehouse named Lakehouse1. A PySpark notebook attached to Lakehouse1 produces a DataFrame named df. You need to append the rows in df to the existing table dbo.FactSales in Warehouse1 from the notebook. What should you use?",
    "options": [
      "a) df.write.mode(\"append\").saveAsTable(\"Warehouse1.dbo.FactSales\")",
      "b) df.write.mode(\"append\").synapsesql(\"Warehouse1.dbo.FactSales\")",
      "c) df.write.format(\"delta\").mode(\"append\").save() to the OneLake path of the FactSales folder in Warehouse1",
      "d) df.write.mode(\"append\").synapsesql(\"Lakehouse1.dbo.FactSales\") and let the SQL analytics endpoint forward the rows to Warehouse1"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. saveAsTable writes to the Spark catalog of the lakehouse; warehouse tables are owned by the warehouse engine.",
      "b": "Is correct. The Spark connector for Fabric Data Warehouse writes a DataFrame to a warehouse table by staging the data and ingesting it with COPY INTO, and supports the append save mode.",
      "c": "Is not correct. Warehouse tables cannot be modified by writing Delta files directly; only the warehouse engine commits to them.",
      "d": "Is not correct. The SQL analytics endpoint of a lakehouse is read-only and the connector writes only to warehouse tables."
    }
  },
  {
    "id": 211,
    "question": "You have a Fabric warehouse named Warehouse1. After a load that added several hundred million rows to FactSales, a query that joins FactSales and DimCustomer has become much slower, and the query plan shows estimated row counts that are far from the actual counts. What should you do FIRST?",
    "options": [
      "a) Create nonclustered indexes on the join columns",
      "b) Scale the Fabric capacity to the largest available SKU",
      "c) Recreate the data in a lakehouse instead of the warehouse",
      "d) Run UPDATE STATISTICS on the join and filter columns of FactSales"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Fabric Warehouse does not support user-created nonclustered indexes.",
      "b": "Is not correct. Scaling up hides a plan quality problem at significant cost.",
      "c": "Is not correct. Changing the item type does not address inaccurate cardinality estimates.",
      "d": "Is correct. Inaccurate estimates after a large data change indicate stale statistics, and manually updating them is the cheapest, most targeted fix."
    }
  },
  {
    "id": 212,
    "question": "You have a Fabric warehouse named Warehouse1. You need to use T-SQL to identify the 10 slowest queries that completed in Warehouse1 during the last 24 hours. Which object should you query?",
    "options": [
      "a) The $SYSTEM.DISCOVER_COMMANDS dynamic management view",
      "b) queryinsights.exec_requests_history",
      "c) sys.dm_exec_requests",
      "d) DESCRIBE HISTORY on each table"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. DISCOVER DMVs belong to semantic models, not to the warehouse.",
      "b": "Is correct. The queryinsights schema retains history of completed requests, including duration, so it can be filtered by time and ordered by elapsed time.",
      "c": "Is not correct. sys.dm_exec_requests shows only requests that are currently running.",
      "d": "Is not correct. DESCRIBE HISTORY returns Delta commit history from Spark, not query performance."
    }
  },
  {
    "id": 213,
    "question": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1 and a lakehouse named Lakehouse1. You need to write a single T-SQL query in Warehouse1 that joins dbo.FactSales in Warehouse1 to the Customer table in Lakehouse1. The solution must not copy data. What should you do?",
    "options": [
      "a) Create a linked server that points to Lakehouse1",
      "b) Add Lakehouse1 to the Explorer of the query editor and reference the table by using the three-part name Lakehouse1.dbo.Customer",
      "c) Use a Dataflow Gen2 to copy the Customer table into Warehouse1",
      "d) Reference the table by using a four-part name that includes the SQL connection string of Lakehouse1"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Linked servers are not supported in Fabric Warehouse.",
      "b": "Is correct. Cross-database queries between warehouses and SQL analytics endpoints in the same workspace use three-part names and read the data in place.",
      "c": "Is not correct. Copying the table violates the requirement.",
      "d": "Is not correct. Four-part names with server references are not used for cross-database queries in Fabric; items in other workspaces are reached through shortcuts instead."
    }
  },
  {
    "id": 214,
    "question": "You have a Fabric warehouse named Warehouse1 that contains a 2 TB table named dbo.FactSales. Testers need a point-in-time copy of FactSales in Warehouse1 that they can modify without affecting the original table. The solution must minimize storage consumption and creation time. What should you use?",
    "options": [
      "a) CREATE TABLE AS SELECT from dbo.FactSales",
      "b) CREATE TABLE dbo.FactSales_Test AS CLONE OF dbo.FactSales",
      "c) A pipeline Copy activity from dbo.FactSales to a new table",
      "d) SELECT INTO a new table from dbo.FactSales"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. CTAS physically rewrites all 2 TB of data, which consumes time and storage.",
      "b": "Is correct. A zero-copy table clone creates a new table that references the existing data files and only stores changes made afterward, so it is created quickly with minimal storage.",
      "c": "Is not correct. A Copy activity moves every row and duplicates the storage.",
      "d": "Is not correct. SELECT INTO also materializes a full copy of the data."
    }
  },
  {
    "id": 215,
    "question": "You have a Fabric lakehouse named Lakehouse1 that contains a table named Employees with 15 columns, including Salary. Members of a reporting team have only Read permission on the SQL analytics endpoint of Lakehouse1. You need to allow the team to query only EmployeeName, Department, and HireDate, exposed with business-friendly column names. What should you create in the SQL analytics endpoint?",
    "options": [
      "a) A view that selects and renames the three columns, and grant SELECT on the view to the team",
      "b) A stored procedure that returns the three columns",
      "c) A OneLake shortcut to the Employees table",
      "d) A copy of the table in a warehouse that contains the three columns"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A view projects only the permitted columns with friendly names and is the natural object on which to grant access.",
      "b": "Is not correct. Procedures are not consumed by reporting tools as tables and add unnecessary complexity.",
      "c": "Is not correct. A shortcut exposes the whole table, including Salary.",
      "d": "Is not correct. Copying duplicates data and creates a synchronization problem."
    }
  },
  {
    "id": 216,
    "question": "You have a Fabric eventhouse that contains a KQL database with a table named Telemetry. Telemetry has columns named Timestamp, DeviceId, and Temperature. You need to return the average temperature per device for the last hour. Which query should you run?",
    "options": [
      "a) SELECT DeviceId, AVG(Temperature) FROM Telemetry WHERE Timestamp > NOW() - 1",
      "b) Telemetry | where Timestamp > ago(1h) | summarize avg(Temperature) by DeviceId",
      "c) Telemetry | project avg(Temperature) | filter ago(1h)",
      "d) Telemetry | groupby DeviceId | average Temperature"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. That is SQL syntax, which is not the native KQL form.",
      "b": "Is correct. KQL pipes a table through where for the time predicate and summarize with by for grouped aggregation.",
      "c": "Is not correct. project selects columns and cannot aggregate this way, and filter is not applied to a time function like that.",
      "d": "Is not correct. There are no groupby or average operators in KQL."
    }
  },
  {
    "id": 217,
    "question": "You have a Fabric warehouse named Warehouse1. A business analyst who does not know T-SQL needs to join two tables in Warehouse1, filter the result, and save the result as a reusable view in Warehouse1. What should the analyst use?",
    "options": [
      "a) DAX query view in Power BI Desktop",
      "b) A Spark notebook",
      "c) The SQL query editor with a CREATE VIEW statement",
      "d) The visual query editor in Warehouse1"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. DAX query view queries semantic models, not warehouse tables, and does not create views.",
      "b": "Is not correct. Notebooks require code and do not create warehouse views.",
      "c": "Is not correct. Writing CREATE VIEW requires T-SQL skills that the analyst does not have.",
      "d": "Is correct. The visual query editor provides a no-code diagram experience whose result can be saved as a view."
    }
  },
  {
    "id": 218,
    "question": "A query filters a large Delta table on OrderDate but still scans nearly all files. Which explanation is MOST likely?",
    "options": [
      "a) Delta tables never support data skipping",
      "b) The SQL analytics endpoint does not support WHERE clauses",
      "c) The table has too few rows",
      "d) The table is not sorted or clustered by OrderDate, so file statistics do not allow effective skipping"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Data skipping is a core Delta capability.",
      "b": "Is not correct. The endpoint fully supports predicates.",
      "c": "Is not correct. Small tables scan quickly and would not present this symptom.",
      "d": "Is correct. When values of the filtered column are spread across all files, the minimum and maximum statistics overlap and few files can be eliminated."
    }
  },
  {
    "id": 219,
    "question": "Which statement about querying data in a lakehouse with the SQL analytics endpoint immediately after a Spark job creates a table is MOST accurate?",
    "options": [
      "a) The endpoint requires the table to be registered manually with CREATE EXTERNAL TABLE",
      "b) Metadata synchronization can lag briefly, so the new table may not be visible for a short time",
      "c) The table appears only after VACUUM is run",
      "d) The table never appears until the lakehouse is recreated"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Registration is automatic for tables in the Tables area.",
      "b": "Is correct. The endpoint discovers Delta tables through a background sync that can take a short time after the write.",
      "c": "Is not correct. VACUUM is unrelated to visibility.",
      "d": "Is not correct. The table appears once metadata sync completes."
    }
  },
  {
    "id": 220,
    "question": "Which T-SQL construct is MOST appropriate to select only the latest row per customer from a change history table?",
    "options": [
      "a) SELECT DISTINCT on all columns",
      "b) A CTE with ROW_NUMBER partitioned by customer and ordered by change date, filtered to row number one",
      "c) TOP 1 without an ORDER BY",
      "d) A GROUP BY customer with MAX on every column"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. DISTINCT keeps every differing row.",
      "b": "Is correct. Ranking within each customer and keeping rank one is the standard, deterministic way to pick the latest row and keeps all its columns consistent.",
      "c": "Is not correct. TOP 1 without ordering returns an arbitrary single row for the entire table.",
      "d": "Is not correct. Taking the maximum of each column independently can mix values from different rows."
    }
  },
  {
    "id": 221,
    "question": "You have a Fabric warehouse named Warehouse1 that contains a stored procedure named usp_LoadSales. The procedure accepts a @LoadDate parameter and contains INSERT and UPDATE statements. You need to run the procedure every night after a Copy activity finishes, passing the pipeline run date as the parameter. What should you use?",
    "options": [
      "a) A Stored procedure activity in a Fabric data pipeline that maps a pipeline expression to @LoadDate",
      "b) A Dataflow Gen2 activity",
      "c) A KQL activity",
      "d) A Semantic model refresh activity"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. The Stored procedure activity calls a warehouse procedure, supports parameters, and can be chained after the Copy activity on success.",
      "b": "Is not correct. A dataflow runs Power Query transformations and cannot call a warehouse stored procedure.",
      "c": "Is not correct. The KQL activity runs commands against a KQL database, not T-SQL procedures.",
      "d": "Is not correct. A semantic model refresh does not run warehouse T-SQL."
    }
  },
  {
    "id": 222,
    "question": "You are migrating a SQL Server data warehouse to a Fabric warehouse. The existing solution uses IDENTITY columns for surrogate keys, MERGE statements for upserts, session #temp tables in load procedures, and DML triggers for auditing. Which component must be redesigned because it is not supported in a Fabric warehouse?",
    "options": [
      "a) The IDENTITY columns",
      "b) The DML triggers",
      "c) The MERGE statements",
      "d) The session #temp tables"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Identity columns are supported in Fabric Warehouse for generating surrogate keys.",
      "b": "Is correct. Triggers are listed as unsupported in the Fabric Warehouse T-SQL surface area, so the auditing logic must move into the load procedures or pipelines.",
      "c": "Is not correct. MERGE is supported and generally available in Fabric Warehouse.",
      "d": "Is not correct. Session-scoped #temp tables are supported in Fabric Warehouse."
    }
  },
  {
    "id": 223,
    "question": "You have a semantic model named Model1 that you edit in Power BI Desktop. You create a new measure and need to validate its results by running an EVALUATE SUMMARIZECOLUMNS statement against Model1 without building any visuals. What should you use?",
    "options": [
      "a) Performance Analyzer",
      "b) Power Query Editor",
      "c) TMDL view",
      "d) DAX query view"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Performance Analyzer records the queries generated by visuals; it does not run queries that you write.",
      "b": "Is not correct. Power Query Editor is used to write M transformations.",
      "c": "Is not correct. TMDL view scripts model metadata and does not execute DAX queries.",
      "d": "Is correct. DAX query view executes DAX queries such as EVALUATE directly against the model and works with Import, DirectQuery, and Direct Lake models."
    }
  },
  {
    "id": 224,
    "question": "Which measure definition is the MOST efficient way to compute the number of distinct customers who purchased?",
    "options": [
      "a) COUNTX(fact_sales, fact_sales[CustomerKey])",
      "b) SUMX(VALUES(fact_sales[CustomerKey]), 1)",
      "c) DISTINCTCOUNT(fact_sales[CustomerKey])",
      "d) COUNTROWS(SUMMARIZE(fact_sales, fact_sales[CustomerKey]))"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. COUNTX counts non-blank values, including duplicates, which answers a different question.",
      "b": "Is not correct. Iterating the distinct values to add ones is an unnecessarily expensive pattern.",
      "c": "Is correct. DISTINCTCOUNT is the purpose-built function and is handled efficiently by the storage engine.",
      "d": "Is not correct. It produces the right answer but with more work than the dedicated function."
    }
  },
  {
    "id": 225,
    "question": "Which statement about the relationship between the storage engine and the formula engine in a DAX query is MOST accurate?",
    "options": [
      "a) The storage engine evaluates all DAX functions",
      "b) The storage engine scans compressed data in parallel, while the single-threaded formula engine handles logic it cannot push down",
      "c) The formula engine is multi-threaded and the storage engine is single-threaded",
      "d) Both engines are single-threaded"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Complex logic falls back to the formula engine.",
      "b": "Is correct. Pushing work into the parallel storage engine and minimizing formula engine iteration is the core of DAX optimization.",
      "c": "Is not correct. The roles are reversed.",
      "d": "Is not correct. The storage engine uses multiple threads."
    }
  },
  {
    "id": 226,
    "question": "Which model design is RECOMMENDED for a Power BI semantic model serving sales analytics?",
    "options": [
      "a) A single flat table containing all facts and dimension attributes",
      "b) A star schema with a central fact table and denormalized dimensions joined by surrogate keys",
      "c) A fully normalized snowflake of twelve tables",
      "d) One table per report page"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. A single wide table duplicates attribute values, inflates size, and complicates reuse.",
      "b": "Is correct. The star schema is the recommended shape for the engine's optimizations and for user comprehension.",
      "c": "Is not correct. Snowflaking adds relationship hops and generally performs worse in the engine.",
      "d": "Is not correct. Model design should not be driven by individual report pages."
    }
  },
  {
    "id": 227,
    "question": "Which statement about relationship cardinality in a star schema is MOST accurate?",
    "options": [
      "a) Bidirectional filtering should be enabled on every relationship",
      "b) Relationships should be one-to-one wherever possible",
      "c) Dimension to fact relationships should be one-to-many from the dimension side, with single-direction filtering by default",
      "d) All relationships should be many-to-many for flexibility"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Bidirectional filtering can create ambiguity and slow queries and should be the exception.",
      "b": "Is not correct. One-to-one usually indicates tables that should be merged.",
      "c": "Is correct. One-to-many from the dimension with single-direction filtering is the pattern the engine optimizes and the easiest to reason about.",
      "d": "Is not correct. Many-to-many relationships add ambiguity and cost and should be used only when the data genuinely requires them."
    }
  },
  {
    "id": 228,
    "question": "A model has two date relationships between fact_sales and dim_date, for OrderDate and ShipDate. How should this be implemented?",
    "options": [
      "a) Remove dim_date and use the fact table's date columns directly",
      "b) Keep one active relationship and one inactive relationship, activating the second with USERELATIONSHIP in specific measures",
      "c) Create two copies of the date dimension so both relationships can be active",
      "d) Use a bidirectional relationship for both"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Losing the date dimension breaks time intelligence and consistent attributes.",
      "b": "Is correct. Only one relationship between two tables can be active, and USERELATIONSHIP activates the other inside a measure.",
      "c": "Is not correct. Role-playing dimension copies are a valid alternative in some designs but duplicate data and attributes, and the question's requirement is met more cleanly with an inactive relationship.",
      "d": "Is not correct. Bidirectional filtering does not allow two active relationships and adds ambiguity."
    }
  },
  {
    "id": 229,
    "question": "Which statement about marking a table as the date table is TRUE?",
    "options": [
      "a) It is only needed for DirectQuery models",
      "b) It automatically creates a hierarchy of year, quarter, and month",
      "c) It converts the table to a calculated table",
      "d) It requires a column of unique, contiguous dates and makes time intelligence functions behave correctly"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It applies to every storage mode.",
      "b": "Is not correct. Hierarchies are created separately.",
      "c": "Is not correct. The table's source is unchanged.",
      "d": "Is correct. Marking the table on a unique, gap-free date column is what allows time intelligence to apply its date filters reliably."
    }
  },
  {
    "id": 230,
    "question": "You have a semantic model named Model1 that uses Direct Lake on SQL storage mode and reads a lakehouse table named FactSales that contains 900 million rows. Report authors need a row-level Profit column, calculated as SalesAmount minus TotalCost, that they can use as a visual axis and in slicers. You have write access to the lakehouse. What should you do?",
    "options": [
      "a) Add the Profit column to the FactSales Delta table in the lakehouse by using a notebook or Dataflow Gen2",
      "b) Add a DAX calculated column named Profit to FactSales in Model1",
      "c) Create a report-level measure named Profit in each report",
      "d) Add a calculated table to Model1 that computes Profit for every row of FactSales"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Materializing the column upstream keeps the model in Direct Lake, makes the value usable as an axis and slicer, and moves the work out of query time.",
      "b": "Is not correct. Direct Lake on SQL models do not support calculated columns on Direct Lake tables, and even the user-context calculated columns of Direct Lake on OneLake are evaluated at query time and are recommended only when the source cannot be changed.",
      "c": "Is not correct. A measure cannot be used as an axis or slicer, and report-level definitions are not reusable.",
      "d": "Is not correct. Calculated tables that reference Direct Lake tables are not supported in Direct Lake on SQL models."
    }
  },
  {
    "id": 231,
    "question": "Which statement about Direct Lake storage mode is TRUE?",
    "options": [
      "a) It reads Delta Parquet files from OneLake on demand, giving near-import performance without copying the data",
      "b) It requires a scheduled data refresh to see any new rows",
      "c) It caches all data permanently in memory at publish time",
      "d) It sends every query to the source as T-SQL"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Direct Lake transcodes Delta column segments into memory as they are needed, avoiding a scheduled data copy.",
      "b": "Is not correct. New data becomes visible after framing, which does not copy data.",
      "c": "Is not correct. Columns are loaded on demand and can be evicted.",
      "d": "Is not correct. That describes DirectQuery; Direct Lake on SQL uses DirectQuery only as a fallback, and Direct Lake on OneLake never falls back."
    }
  },
  {
    "id": 232,
    "question": "What does framing mean for a Direct Lake semantic model?",
    "options": [
      "a) Recording which Delta table version the model reads, making newly written data visible and evicting stale segments",
      "b) Compressing the model with VertiPaq at publish time",
      "c) Applying row-level security filters to the model",
      "d) Creating aggregations automatically"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A refresh of a Direct Lake model reframes it onto the current Delta version so queries see the new data.",
      "b": "Is not correct. Transcoding into memory happens on demand per column.",
      "c": "Is not correct. Security is unrelated to framing.",
      "d": "Is not correct. Aggregations are configured explicitly."
    }
  },
  {
    "id": 233,
    "question": "You have a semantic model named Model1 that uses Direct Lake on SQL storage mode against a warehouse named Warehouse1. The Direct Lake behavior property of Model1 is set to Automatic. Which situation causes queries to fall back to DirectQuery?",
    "options": [
      "a) The workspace is connected to Git integration",
      "b) Model1 contains a calculation group",
      "c) A report page that uses Model1 contains more than ten visuals",
      "d) A table in Model1 is based on a SQL view, or a query exceeds the capacity guardrails"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Source control is unrelated to query execution.",
      "b": "Is not correct. Calculation groups are supported in Direct Lake models.",
      "c": "Is not correct. The number of visuals does not trigger fallback.",
      "d": "Is correct. In Direct Lake on SQL, tables based on SQL views, SQL-based granular security, and guardrail breaches cause queries to be served by DirectQuery through the SQL analytics endpoint."
    }
  },
  {
    "id": 234,
    "question": "You have a semantic model that uses Direct Lake on SQL storage mode. During testing, you set the Direct Lake behavior property to DirectLakeOnly. What is the purpose of this setting?",
    "options": [
      "a) To force all queries through the SQL analytics endpoint",
      "b) To reduce capacity consumption during report rendering",
      "c) To make guardrail breaches fail visibly instead of silently degrading to slower DirectQuery performance",
      "d) To enable calculated columns"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. DirectQueryOnly forces queries through the SQL analytics endpoint; DirectLakeOnly does the opposite.",
      "b": "Is not correct. The setting is about detection, not consumption.",
      "c": "Is correct. Disabling fallback surfaces the problem during testing so the design can be corrected rather than quietly running slowly in production.",
      "d": "Is not correct. The setting controls fallback only; calculated columns on Direct Lake tables remain unsupported in Direct Lake on SQL models."
    }
  },
  {
    "id": 235,
    "question": "Which combination of storage modes describes a composite model?",
    "options": [
      "a) A mix, such as some Import tables with a DirectQuery connection to another semantic model",
      "b) All tables DirectQuery",
      "c) All tables Import",
      "d) All tables Direct Lake"
    ],
    "correct_answer": "A",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is correct. A composite model mixes storage modes or combines local tables with remote model connections.",
      "b": "Is not correct. A uniform DirectQuery model is not composite.",
      "c": "Is not correct. A uniform Import model is not composite.",
      "d": "Is not correct. A uniform Direct Lake model is not composite."
    }
  },
  {
    "id": 236,
    "question": "In a composite model, why would a shared dimension be set to Dual storage mode?",
    "options": [
      "a) To enable row-level security on that table only",
      "b) To allow the dimension to serve both imported aggregation queries and DirectQuery detail joins efficiently",
      "c) To duplicate the table in memory twice for redundancy",
      "d) To allow calculated columns on the dimension"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Row-level security is independent of storage mode.",
      "b": "Is correct. Dual lets the engine treat the table as imported when it can, or as DirectQuery when it must join remote detail, avoiding unnecessary source queries.",
      "c": "Is not correct. Dual does not provide redundancy.",
      "d": "Is not correct. Storage mode is not about calculated columns."
    }
  },
  {
    "id": 237,
    "question": "You create a lakehouse named Lakehouse1 in a Fabric workspace and load gold star schema tables into it. You need to provide enterprise report authors with a governed Direct Lake semantic model that has relationships, measures, and row-level security. What should you do?",
    "options": [
      "a) Use the default semantic model that Fabric creates automatically with Lakehouse1",
      "b) Grant report authors Build permission on the SQL analytics endpoint of Lakehouse1",
      "c) Create a new semantic model from Lakehouse1, select the required tables, and define the relationships, measures, and roles in it",
      "d) Create a OneLake shortcut to the Lakehouse1 tables in each report author's workspace"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Fabric no longer creates default semantic models for new lakehouses, warehouses, or mirrored databases; existing ones were decoupled into regular semantic models.",
      "b": "Is not correct. Build permission applies to semantic models, and the endpoint alone provides no relationships, measures, or roles.",
      "c": "Is correct. Semantic models are now created explicitly, and a purpose-built Direct Lake model gives full control over relationships, measures, and security.",
      "d": "Is not correct. Shortcuts expose data, not a governed semantic layer."
    }
  },
  {
    "id": 238,
    "question": "Which practice keeps a semantic model's field list clear for report authors?",
    "options": [
      "a) Rename all columns to abbreviations",
      "b) Create one measure per report page",
      "c) Hide key and technical columns, organize fields into display folders, and add descriptions",
      "d) Expose every column including surrogate keys and load timestamps"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Abbreviations reduce clarity for business users.",
      "b": "Is not correct. Report-specific measures multiply the model surface without adding shared value.",
      "c": "Is correct. Hiding technical fields, grouping related items, and documenting them is what makes self-service authoring reliable.",
      "d": "Is not correct. Exposing technical columns invites incorrect visuals."
    }
  },
  {
    "id": 239,
    "question": "Which modeling object lets users switch a chart's axis between Product, Region, and Channel from a slicer?",
    "options": [
      "a) A calculation group",
      "b) An aggregation table",
      "c) A perspective",
      "d) A field parameter"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Calculation groups vary how measures are calculated, not which fields a visual shows.",
      "b": "Is not correct. Aggregations are a performance feature.",
      "c": "Is not correct. A perspective is a static subset of the model.",
      "d": "Is correct. Field parameters expose a table of fields so users can choose the dimension or measure a visual uses."
    }
  },
  {
    "id": 240,
    "question": "A model contains 20 measures that all need Current, YTD, prior year, and year-over-year variants. What is the MOST maintainable implementation?",
    "options": [
      "a) Use implicit measures in the visuals",
      "b) Create a calculation group with four calculation items using SELECTEDMEASURE",
      "c) Write 80 individual measures",
      "d) Create 4 report-level measures in each report"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Implicit measures cannot express time intelligence variants.",
      "b": "Is correct. Calculation items rewrite whichever measure is in scope, so four items cover all 20 measures and future ones.",
      "c": "Is not correct. Eighty measures multiply maintenance and invite inconsistency.",
      "d": "Is not correct. Report-level duplication is worse, not better."
    }
  },
  {
    "id": 241,
    "question": "Which DAX expression correctly returns total sales for the same period last year, assuming dim_date is marked as the date table?",
    "options": [
      "a) SUMX(dim_date, [Total Sales] - 1)",
      "b) CALCULATE([Total Sales], SAMEPERIODLASTYEAR(dim_date[Date]))",
      "c) CALCULATE([Total Sales], PREVIOUSYEAR(fact_sales[OrderDate]))",
      "d) CALCULATE([Total Sales], FILTER(dim_date, dim_date[Year] = YEAR(TODAY()) - 1))"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Subtracting one from a measure is meaningless here.",
      "b": "Is correct. SAMEPERIODLASTYEAR shifts the current date filter back one year using the date table.",
      "c": "Is not correct. Time intelligence should use the marked date table's date column, not a fact table date column, and PREVIOUSYEAR returns the whole prior year rather than the same period.",
      "d": "Is not correct. Hardcoding the year against TODAY ignores the current filter context and breaks for historical comparisons."
    }
  },
  {
    "id": 242,
    "question": "What does CALCULATE do that distinguishes it from a plain aggregation?",
    "options": [
      "a) It disables row-level security for the expression",
      "b) It evaluates an expression in a filter context modified by its filter arguments",
      "c) It sorts the result set before aggregating",
      "d) It converts a measure into a calculated column"
    ],
    "correct_answer": "B",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Security filters cannot be removed by CALCULATE.",
      "b": "Is correct. Modifying the filter context in which an expression is evaluated is the defining purpose of CALCULATE.",
      "c": "Is not correct. Sorting is not a function of CALCULATE.",
      "d": "Is not correct. It does not change object types."
    }
  },
  {
    "id": 243,
    "question": "Which measure correctly computes each product category's share of the grand total of sales regardless of the current category filter?",
    "options": [
      "a) DIVIDE([Total Sales], CALCULATE([Total Sales], REMOVEFILTERS(dim_product)))",
      "b) DIVIDE([Total Sales], CALCULATE([Total Sales], KEEPFILTERS(dim_product)))",
      "c) DIVIDE([Total Sales], SUM(fact_sales[SalesAmount]))",
      "d) DIVIDE([Total Sales], COUNTROWS(dim_product))"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Removing the product filters in the denominator yields the all-category total, giving a valid share.",
      "b": "Is not correct. KEEPFILTERS preserves the existing filters instead of clearing them.",
      "c": "Is not correct. The denominator is evaluated in the same filter context, so the ratio is always one.",
      "d": "Is not correct. Dividing sales by a row count is not a share of total."
    }
  },
  {
    "id": 244,
    "question": "What is the effect of using variables in a DAX measure?",
    "options": [
      "a) They evaluate an expression once in the context where they are declared, improving readability and avoiding repeated evaluation",
      "b) They force the measure to be evaluated in the storage engine",
      "c) They persist values between queries as a cache",
      "d) They create calculated columns in the model"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A variable is computed once in its declaration context, which both clarifies intent and avoids recomputing the same subexpression.",
      "b": "Is not correct. Variables do not determine which engine performs the work.",
      "c": "Is not correct. Their scope is the single expression evaluation.",
      "d": "Is not correct. Variables exist only inside the expression."
    }
  },
  {
    "id": 245,
    "question": "Which statement about context transition is TRUE?",
    "options": [
      "a) It converts a filter context into a row context",
      "b) It removes all filters from the model",
      "c) It only occurs in calculated columns",
      "d) It converts the current row context into an equivalent filter context when CALCULATE or a measure reference is evaluated inside an iterator"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The conversion goes from row context to filter context.",
      "b": "Is not correct. Filters are added, not removed.",
      "c": "Is not correct. It occurs anywhere a measure or CALCULATE is used within a row context.",
      "d": "Is correct. This transition is what makes SUMX over a dimension with a measure reference work per row."
    }
  },
  {
    "id": 246,
    "question": "Which measure is the MOST efficient way to compute the total sales amount when the fact table already stores a LineTotal column?",
    "options": [
      "a) CALCULATE(SUM(fact_sales[LineTotal]), ALL(fact_sales))",
      "b) SUMX(fact_sales, fact_sales[Quantity] * fact_sales[UnitPrice])",
      "c) COUNTROWS(fact_sales) * AVERAGE(fact_sales[LineTotal])",
      "d) SUM(fact_sales[LineTotal])"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Removing all filters changes the result and is not what was asked.",
      "b": "Is not correct. Recomputing the product row by row is unnecessary work when the value is materialized.",
      "c": "Is not correct. This is an indirect and fragile way to reconstruct a sum.",
      "d": "Is correct. A simple SUM over a materialized column is handled entirely by the storage engine."
    }
  },
  {
    "id": 247,
    "question": "Which statement about DIVIDE compared with the division operator in DAX is TRUE?",
    "options": [
      "a) DIVIDE is slower and should be avoided",
      "b) They are identical in every way",
      "c) DIVIDE returns a specified alternate result, blank by default, instead of an error when the denominator is zero",
      "d) The operator returns blank for a zero denominator, while DIVIDE returns an error"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. DIVIDE is the recommended function and is efficiently implemented.",
      "b": "Is not correct. Their error handling differs.",
      "c": "Is correct. Safe division with a controllable alternate result is the purpose of DIVIDE.",
      "d": "Is not correct. The behaviors are reversed in this option."
    }
  },
  {
    "id": 248,
    "question": "A measure must always ignore any slicer on the Region table but respect all other filters. Which pattern is correct?",
    "options": [
      "a) CALCULATE([Total Sales], KEEPFILTERS(dim_region))",
      "b) CALCULATE([Total Sales], ALL(fact_sales))",
      "c) CALCULATE([Total Sales], REMOVEFILTERS(dim_region))",
      "d) CALCULATE([Total Sales], VALUES(dim_region))"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. KEEPFILTERS retains the region filter rather than clearing it.",
      "b": "Is not correct. Clearing all filters from the fact table removes far more than the region filter.",
      "c": "Is correct. REMOVEFILTERS on the region table clears only that table's filters and leaves the rest of the context intact.",
      "d": "Is not correct. VALUES returns the currently visible region values, so the filter still applies."
    }
  },
  {
    "id": 249,
    "question": "Which statement about implicit measures is MOST accurate?",
    "options": [
      "a) They are preferred in enterprise models because they reduce the number of objects",
      "b) They bypass governed business logic and are unavailable to some client tools, so explicit measures are preferred",
      "c) They are required for Direct Lake models",
      "d) They can express time intelligence automatically"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Fewer objects does not compensate for inconsistent, ungoverned numbers.",
      "b": "Is correct. Explicit measures encapsulate the agreed definition and are available to all clients, including Excel pivot tables using the model.",
      "c": "Is not correct. Direct Lake works with explicit measures.",
      "d": "Is not correct. Implicit aggregations cannot express period comparisons."
    }
  },
  {
    "id": 250,
    "question": "You are building a semantic model for a bank. The model contains FactBalance at the account grain, DimAccount, and DimCustomer. A customer can own many accounts, and an account can be jointly owned by many customers. Report users must be able to filter balances by customer. What should you do?",
    "options": [
      "a) Create a bridge table named CustomerAccount, relate DimCustomer and DimAccount to it with one-to-many relationships, and allow filters to propagate from the bridge to DimAccount, for example with a bidirectional relationship or CROSSFILTER in measures",
      "b) Add CustomerID to FactBalance by duplicating each balance row once per owner",
      "c) Create a one-to-one relationship between DimCustomer and DimAccount",
      "d) Remove jointly owned accounts from the model"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. A bridge table models the many-to-many relationship explicitly, and controlled filter propagation through it lets customer filters reach the fact table without duplicating balances, although totals across customers are non-additive and must be validated.",
      "b": "Is not correct. Duplicating fact rows overstates balances in any total that spans owners.",
      "c": "Is not correct. The relationship is genuinely many-to-many, so one-to-one cardinality is invalid.",
      "d": "Is not correct. Removing data makes the reports incomplete and wrong."
    }
  },
  {
    "id": 251,
    "question": "You have a Fabric semantic model that contains tables named Sales, Customer, and Product in a star schema with single-direction one-to-many relationships. A report must show the number of customers who purchased the products selected in a Product slicer. You need to meet the requirement while minimizing ambiguity and query cost for the rest of the model. What should you do?",
    "options": [
      "a) Set the cross-filter direction of the Customer-to-Sales relationship to Both",
      "b) Set the cross-filter direction of every relationship in the model to Both",
      "c) Keep the relationships single-direction and create a measure that uses CALCULATE with CROSSFILTER(Sales[CustomerKey], Customer[CustomerKey], BOTH)",
      "d) Create a many-to-many relationship directly between Product and Customer"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It works, but enabling bidirectional filtering on the model relationship affects every query that uses it and can introduce ambiguous filter paths.",
      "b": "Is not correct. Bidirectional filtering everywhere increases query cost and creates ambiguity; single direction is the recommended default in a star schema.",
      "c": "Is correct. CROSSFILTER enables bidirectional propagation only inside the measure that needs it, limiting both the risk and the cost.",
      "d": "Is not correct. A direct Product-to-Customer relationship bypasses the fact table and does not represent which customers bought which products."
    }
  },
  {
    "id": 252,
    "question": "You have a semantic model that contains a fact_sales table and a marked date table named dim_date. A line chart shows dates from a date range slicer. You need a measure that shows a running total of sales that starts at the first date selected in the slicer. Which DAX expression should you use?",
    "options": [
      "a) SUM(fact_sales[SalesAmount]) with the visual sorted by date",
      "b) CALCULATE([Total Sales], FILTER(ALLSELECTED(dim_date[Date]), dim_date[Date] <= MAX(dim_date[Date])))",
      "c) TOTALYTD([Total Sales], dim_date[Date])",
      "d) CALCULATE([Total Sales], DATESBETWEEN(dim_date[Date], MIN(dim_date[Date]), MAX(dim_date[Date])))"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Sorting a visual does not accumulate values.",
      "b": "Is correct. ALLSELECTED keeps the dates selected in the slicer and the FILTER keeps those up to the current date, producing a running total that starts at the first selected date.",
      "c": "Is not correct. TOTALYTD accumulates from the start of the calendar year and resets each year, so it ignores the slicer's start date and does not span years.",
      "d": "Is not correct. Using MIN and MAX of the current context reproduces the current period total rather than accumulating up to each date."
    }
  },
  {
    "id": 253,
    "question": "You have a Fabric workspace that contains a lakehouse named Lakehouse1 and a semantic model that uses Direct Lake on SQL analytics endpoint storage mode for all tables, including a large Sales table. You need to add a monthly summary of Sales to the model for a new report. What should you do?",
    "options": [
      "a) Create a calculated table in the model that uses SUMMARIZECOLUMNS over the Sales table",
      "b) Create the monthly summary as a Delta table in Lakehouse1, for example by using a notebook or Dataflow Gen2, and add it to the model",
      "c) Enable the large semantic model storage format, and then create the calculated table",
      "d) Add calculated columns for year and month to the Sales table and group by them in the report"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Calculated tables that reference Direct Lake tables are not supported in Direct Lake on SQL analytics endpoint models.",
      "b": "Is correct. Direct Lake tables must be backed by Delta tables in OneLake, so derived tables are materialized upstream in the lakehouse and then added to the model.",
      "c": "Is not correct. The storage format setting does not change which calculated objects Direct Lake supports.",
      "d": "Is not correct. Calculated columns are not supported on Direct Lake on SQL analytics endpoint tables."
    }
  },
  {
    "id": 254,
    "question": "You have a semantic model that contains a Product table with columns named Category, Subcategory, and ProductName. Report authors want to add a single field to a visual that lets consumers drill down from category to subcategory to product. What should you create?",
    "options": [
      "a) A hierarchy in the Product table",
      "b) A calculation group",
      "c) A field parameter",
      "d) A perspective"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. A hierarchy packages an ordered set of columns of the same table as a single drill path for authors and consumers; it is metadata only.",
      "b": "Is not correct. Calculation groups apply reusable logic to measures, not drill paths over columns.",
      "c": "Is not correct. A field parameter lets users switch which field a visual uses, not drill through levels.",
      "d": "Is not correct. A perspective only limits which objects are visible to an audience."
    }
  },
  {
    "id": 255,
    "question": "You have an Import semantic model in which a date table covering 2020 to 2026 has a one-to-many relationship to a Sales table. The Sales table contains orders dated 2027. What happens when users analyze Sales by year?",
    "options": [
      "a) The 2027 rows are deleted automatically during refresh",
      "b) The model refresh fails with a referential integrity error",
      "c) The 2027 rows are grouped under a blank Year value, so the yearly values do not add up to the grand total until the date table is extended",
      "d) Time intelligence functions automatically extend the date table to 2027"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Fact rows are never silently deleted.",
      "b": "Is not correct. Missing dimension members do not fail the refresh of a regular relationship.",
      "c": "Is correct. Unmatched keys are assigned to the blank row of the dimension; they are included in the grand total but not in any listed year, a classic cause of figures that do not add up.",
      "d": "Is not correct. The date table must cover the full fact range; nothing extends it automatically."
    }
  },
  {
    "id": 256,
    "question": "You have a semantic model in which a Sales table has OrderDateKey and ShipDateKey columns that both relate to a single Date table. The OrderDateKey relationship is active. You need a measure that shows sales by ship date while keeping one Date table in the model. What should you do?",
    "options": [
      "a) Create an inactive relationship on ShipDateKey and a measure that uses CALCULATE with USERELATIONSHIP",
      "b) Make both relationships active and set them to bidirectional",
      "c) Replace both relationships with a many-to-many relationship",
      "d) Set the cross-filter direction of the OrderDateKey relationship to Both"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. USERELATIONSHIP activates the inactive role-playing relationship only for that measure; duplicating the Date table is the alternative when independent slicers are needed.",
      "b": "Is not correct. Only one active relationship can exist between two tables, and bidirectional filtering is unrelated to role playing.",
      "c": "Is not correct. The relationships remain one-to-many; many-to-many does not solve the role-playing requirement.",
      "d": "Is not correct. Filter direction does not make the model filter by ship date."
    }
  },
  {
    "id": 257,
    "question": "You are implementing dynamic row-level security in a semantic model. A Security table contains each salesperson's Microsoft Entra sign-in name (user principal name) and region. You need a role filter that returns the rows for the signed-in user. Which DAX function should the filter expression compare against Security[UPN]?",
    "options": [
      "a) SELECTEDVALUE",
      "b) USERPRINCIPALNAME",
      "c) USEROBJECTID",
      "d) CUSTOMDATA"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. SELECTEDVALUE reads the current filter selection, not the identity of the user.",
      "b": "Is correct. USERPRINCIPALNAME returns the user principal name of the signed-in user consistently in Power BI Desktop and the service, so it matches the stored values.",
      "c": "Is not correct. USEROBJECTID returns the Microsoft Entra object ID, which does not match a column that stores user principal names.",
      "d": "Is not correct. CUSTOMDATA returns a value passed in the connection string, used in embedding scenarios."
    }
  },
  {
    "id": 258,
    "question": "Which statement about aggregation tables in a semantic model is TRUE?",
    "options": [
      "a) They must be manually selected by report authors",
      "b) They answer matching queries transparently while the detail table still serves queries they cannot satisfy",
      "c) They replace the detail table entirely",
      "d) They only work with Import storage mode"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Redirection is automatic and invisible to authors.",
      "b": "Is correct. The engine redirects queries it can answer from the aggregation and falls through to the detail otherwise.",
      "c": "Is not correct. The detail table remains for queries below the aggregation grain.",
      "d": "Is not correct. Aggregations are most valuable with DirectQuery detail tables."
    }
  },
  {
    "id": 259,
    "question": "You have a semantic model with a DirectQuery table named Sales. You create an Import table named Sales_Agg that is grouped by DateKey and ProductKey and contains a SalesAmount sum. In Manage aggregations, which summarization should you set for the DateKey column of Sales_Agg?",
    "options": [
      "a) Sum",
      "b) Count",
      "c) Max",
      "d) GroupBy"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Sum is used for additive measure columns such as SalesAmount.",
      "b": "Is not correct. Count maps a row count aggregation of a detail column.",
      "c": "Is not correct. Max maps the maximum of a detail column, not a grain column.",
      "d": "Is correct. GroupBy declares the columns that define the aggregation's grain so the engine knows which queries it can satisfy."
    }
  },
  {
    "id": 260,
    "question": "Which statement about the model's granularity decision is MOST accurate?",
    "options": [
      "a) Grain has no effect on model size",
      "b) The grain should always be monthly to keep models small",
      "c) The grain should be the finest level the business genuinely needs, because finer grain increases size and cost",
      "d) The finest possible grain is always the right choice"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Row count is a primary driver of model size.",
      "b": "Is not correct. Forcing a monthly grain would break legitimate daily or transactional analysis.",
      "c": "Is correct. Grain should be driven by requirements, balancing analytical need against storage and performance cost.",
      "d": "Is not correct. Unnecessary detail inflates size and slows queries without adding value."
    }
  },
  {
    "id": 261,
    "question": "A semantic model shows correct totals but slicers on the customer table do not filter the sales visual. What should be checked?",
    "options": [
      "a) Whether the measure uses DIVIDE",
      "b) Whether query caching is enabled",
      "c) Whether the model has a date table",
      "d) Whether the relationship between dim_customer and fact_sales exists, is active, and has the correct direction"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. DIVIDE affects division safety, not filter propagation.",
      "b": "Is not correct. Caching affects speed, not filter behavior.",
      "c": "Is not correct. A date table is unrelated to customer filtering.",
      "d": "Is correct. A missing, inactive, or wrongly directed relationship is the usual reason a dimension slicer does not affect a fact visual."
    }
  },
  {
    "id": 262,
    "question": "Which statement about the Auto date/time setting is MOST accurate for an enterprise model?",
    "options": [
      "a) It should be disabled because it creates hidden date tables per date column, wasting memory and bypassing the conformed date dimension",
      "b) It should be enabled so every date column gets time intelligence",
      "c) It reduces model size",
      "d) It is required for TOTALYTD to work"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Disabling it and using one marked date dimension is the recommended enterprise practice.",
      "b": "Is not correct. Automatic per-column tables produce inconsistent attributes and duplication.",
      "c": "Is not correct. It increases size by adding hidden tables.",
      "d": "Is not correct. Time intelligence works with a properly marked date table."
    }
  },
  {
    "id": 263,
    "question": "You have a Fabric warehouse that contains a fact table with billions of rows. Users need fast summary reports by month and product, and occasionally need to drill through to individual transactions. You need to design the semantic model. What should you do?",
    "options": [
      "a) Import the entire fact table at full grain",
      "b) Limit the report to summary visuals and disable drill-through",
      "c) Keep the detail table in DirectQuery and add an imported aggregation table at the month and product grain",
      "d) Use DirectQuery for all tables without aggregations"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Importing billions of rows at full grain is often impractical and costly.",
      "b": "Is not correct. Abandoning a valid requirement is not a design solution.",
      "c": "Is correct. User-defined aggregations answer summary queries from memory while the DirectQuery detail table remains available for drill-through. User-defined aggregations are not supported with Direct Lake tables.",
      "d": "Is not correct. Without aggregations, summary visuals query the detail table every time and perform poorly."
    }
  },
  {
    "id": 264,
    "question": "Which statement about calculation items is TRUE?",
    "options": [
      "a) They use SELECTEDMEASURE so the same logic applies to whichever measure is in scope",
      "b) They are stored as physical columns in the fact table",
      "c) They can only be applied to one specific measure",
      "d) They replace the need for a date table"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. SELECTEDMEASURE is the placeholder that makes a calculation item reusable across measures.",
      "b": "Is not correct. They are metadata, evaluated at query time.",
      "c": "Is not correct. Their value comes precisely from applying to many measures.",
      "d": "Is not correct. Time intelligence items still rely on a date table."
    }
  },
  {
    "id": 265,
    "question": "You have a semantic model that uses Direct Lake on SQL analytics endpoint storage mode. One table is based on a SQL view named vw_Sales in a Fabric warehouse. Reports that use the table are slow, and monitoring shows DirectQuery queries. You need the table to be served in Direct Lake mode. What should you do?",
    "options": [
      "a) Materialize the view's logic into a Delta table, for example with CREATE TABLE AS SELECT, and base the model table on it",
      "b) Set the Direct Lake behavior property of the model to DirectLakeOnly",
      "c) Enable the large semantic model storage format",
      "d) Run OPTIMIZE on the view"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Direct Lake reads Delta tables, not SQL views, so tables based on views always fall back to DirectQuery; materializing the logic keeps Direct Lake performance.",
      "b": "Is not correct. Disabling fallback makes queries against the view fail rather than run in Direct Lake mode.",
      "c": "Is not correct. The storage format does not change how views are read.",
      "d": "Is not correct. OPTIMIZE compacts Delta table files; a view has no files to compact."
    }
  },
  {
    "id": 266,
    "question": "A model's Total Sales measure must exclude cancelled orders in every report. Where should this rule be implemented?",
    "options": [
      "a) As a visual-level filter on each chart",
      "b) As a bookmark in each report",
      "c) In the measure definition or by excluding cancelled rows in the gold table, so every consumer gets the same number",
      "d) As a filter on each report page"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Visual filters are the least consistent place for a business rule.",
      "b": "Is not correct. Bookmarks capture states and do not enforce a rule.",
      "c": "Is correct. Encoding the rule once in the model or in the curated data guarantees consistency for every consumer.",
      "d": "Is not correct. Page filters must be repeated everywhere and can be removed."
    }
  },
  {
    "id": 267,
    "question": "Which statement about relationships on floating point or text columns is MOST accurate?",
    "options": [
      "a) They are not permitted by the engine",
      "b) They perform identically to integer relationships",
      "c) They are required for Direct Lake",
      "d) They are allowed but perform worse and risk matching problems, so integer surrogate keys are preferred"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The engine permits them.",
      "b": "Is not correct. Wide or imprecise key types increase dictionary size and join cost.",
      "c": "Is not correct. Direct Lake has no such requirement.",
      "d": "Is correct. Narrow integer keys compress and join best, which is why surrogate keys are recommended."
    }
  },
  {
    "id": 268,
    "question": "Which statement about a shared enterprise semantic model consumed by many reports is MOST accurate?",
    "options": [
      "a) Consumers need the workspace Member role",
      "b) Reports connect live to the model, so a measure correction is immediately reflected in all of them",
      "c) Reports must be in the same workspace as the model",
      "d) Each report should import its own copy of the data to avoid contention"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Build permission on the model is sufficient for authors, and Viewer or app access for consumers.",
      "b": "Is correct. A live connection means the model is the single place where logic is defined and fixed.",
      "c": "Is not correct. Reports in other workspaces can connect to the model.",
      "d": "Is not correct. Duplicating data is what a shared model is designed to prevent."
    }
  },
  {
    "id": 269,
    "question": "Which statement about storing a datetime column at second precision in a large imported fact table is MOST accurate?",
    "options": [
      "a) It compresses better than a date column",
      "b) Its very high cardinality harms compression, so splitting it into a date key and a separate time column is often better",
      "c) Precision has no effect on model size",
      "d) It is required for time intelligence"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. A date column has far fewer distinct values and compresses much better.",
      "b": "Is correct. Splitting date and time reduces dictionary size dramatically while keeping the required analytical detail.",
      "c": "Is not correct. Cardinality is one of the strongest drivers of column size.",
      "d": "Is not correct. Time intelligence needs a date table, not second precision."
    }
  },
  {
    "id": 270,
    "question": "Which practice is RECOMMENDED when a semantic model must serve both finance and operations with different terminology?",
    "options": [
      "a) Rename columns back and forth depending on who is asking",
      "b) Build two completely separate models from the same tables and maintain both",
      "c) Put both terminologies in every column name",
      "d) Use one governed model with clear naming, plus perspectives or separate reports for each audience"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Renaming per request is unmanageable and breaks reports.",
      "b": "Is not correct. Duplicate models duplicate logic and eventually disagree.",
      "c": "Is not correct. Compound names confuse both audiences.",
      "d": "Is correct. A single source of truth with audience-specific presentation keeps the numbers consistent while meeting each group's needs."
    }
  },
  {
    "id": 271,
    "question": "Which tool tells you how much memory each column of a semantic model consumes so you can find what to remove?",
    "options": [
      "a) The Fabric Capacity Metrics app",
      "b) Power Query's column profile",
      "c) VertiPaq Analyzer, available in DAX Studio or Tabular Editor",
      "d) The Monitoring hub"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The metrics app reports capacity consumption, not model internals.",
      "b": "Is not correct. Column profiling describes source data during transformation.",
      "c": "Is correct. VertiPaq Analyzer reports table and column size, cardinality, and compression, which is exactly what is needed to target size reduction.",
      "d": "Is not correct. The hub tracks run history."
    }
  },
  {
    "id": 272,
    "question": "A report page takes eight seconds to render. Which tool should be used FIRST to determine which visual is responsible?",
    "options": [
      "a) The deployment pipeline comparison view",
      "b) The Spark UI",
      "c) Performance Analyzer in Power BI Desktop",
      "d) Query insights in the warehouse"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It compares item definitions between stages.",
      "b": "Is not correct. Spark is not involved in serving report visuals from a semantic model.",
      "c": "Is correct. Performance Analyzer records per-visual DAX query, visual display, and other time, and exposes the generated query.",
      "d": "Is not correct. Query insights covers warehouse T-SQL, which is relevant only for DirectQuery investigations after the visual is identified."
    }
  },
  {
    "id": 273,
    "question": "DAX Studio server timings show that a slow measure spends most of its time in the formula engine with many storage engine queries. What does this MOST likely indicate?",
    "options": [
      "a) That the capacity is too small",
      "b) That result set caching is disabled",
      "c) That the model needs VACUUM",
      "d) An inefficient pattern such as row-by-row iteration that the storage engine cannot satisfy"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Capacity size does not change where the work happens in the engine.",
      "b": "Is not correct. Result set caching is a warehouse feature.",
      "c": "Is not correct. VACUUM is Delta maintenance, unrelated to DAX evaluation.",
      "d": "Is correct. Heavy formula engine time with many small storage engine calls is the signature of an iterator or context transition pattern that should be rewritten to be set based."
    }
  },
  {
    "id": 274,
    "question": "Which two parameters must a Power Query query filter on before an incremental refresh policy can be configured?",
    "options": [
      "a) LowWatermark and HighWatermark",
      "b) RangeFrom and RangeTo",
      "c) RangeStart and RangeEnd",
      "d) StartDate and EndDate"
    ],
    "correct_answer": "C",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. These are generic pipeline concepts, not the required parameters.",
      "b": "Is not correct. These are not the reserved parameter names.",
      "c": "Is correct. RangeStart and RangeEnd are the reserved date/time parameters the policy uses to generate partitions.",
      "d": "Is not correct. The names are reserved and must match exactly."
    }
  },
  {
    "id": 275,
    "question": "Which statement about the Detect data changes option of an incremental refresh policy is TRUE?",
    "options": [
      "a) It removes the need for RangeStart and RangeEnd",
      "b) It detects schema changes in the source",
      "c) It refreshes all partitions but in parallel",
      "d) It queries the maximum value of a last-update audit column for each partition in the incremental range and refreshes only the partitions whose value changed"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. The range parameters remain mandatory.",
      "b": "Is not correct. It concerns data changes, not schema drift.",
      "c": "Is not correct. Its purpose is to avoid refreshing unchanged partitions.",
      "d": "Is correct. The option compares the maximum value of a column such as LastUpdateTime per partition with the previous refresh; hard deletes do not update that column, so a soft-delete pattern is needed to detect them."
    }
  },
  {
    "id": 276,
    "question": "An incremental refresh policy keeps five years and refreshes the last 10 days, but the refresh still takes hours and the source shows one huge query. What is the MOST likely cause?",
    "options": [
      "a) The date table is not marked",
      "b) The range filter does not fold to the source, so partitions are not being pushed down",
      "c) Detect data changes is enabled",
      "d) The model uses the large semantic model storage format"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Marking the date table affects time intelligence, not partition filters.",
      "b": "Is correct. Incremental refresh depends on the RangeStart and RangeEnd filter folding into the source query; without folding, each partition scans everything.",
      "c": "Is not correct. Detecting changes reduces work when it applies.",
      "d": "Is not correct. The storage format enables large models rather than slowing refresh."
    }
  },
  {
    "id": 277,
    "question": "Which statement about a hybrid table is TRUE?",
    "options": [
      "a) It combines imported historical partitions with a DirectQuery partition for the most recent data",
      "b) It is a Direct Lake model with fallback disabled",
      "c) It requires DirectQuery for the whole table",
      "d) It stores half the data in a lakehouse and half in a warehouse"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Enabling real-time data on an incremental refresh policy adds a DirectQuery partition for current rows on top of imported history.",
      "b": "Is not correct. That describes a Direct Lake configuration, not a hybrid table.",
      "c": "Is not correct. Only the latest partition uses DirectQuery.",
      "d": "Is not correct. The split is between imported and DirectQuery partitions, not storage items."
    }
  },
  {
    "id": 278,
    "question": "When should the large semantic model storage format be enabled?",
    "options": [
      "a) For every model regardless of size, because it is always faster",
      "b) Never, because it is deprecated",
      "c) Only for DirectQuery models",
      "d) For models that must grow beyond the 10 GB limit, or that are managed through XMLA write operations such as partition-level refresh"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. It is not a general query performance switch, although it can be set as the workspace default storage format.",
      "b": "Is not correct. It is a current, supported capability for Fabric F SKUs, Premium, and PPU.",
      "c": "Is not correct. It concerns models that cache data.",
      "d": "Is correct. The format is required for models larger than 10 GB and is recommended when XMLA-based write operations are used because it improves their performance."
    }
  },
  {
    "id": 279,
    "question": "Which action is MOST likely to reduce the memory footprint of an imported semantic model significantly?",
    "options": [
      "a) Adding more measures",
      "b) Turning on query caching",
      "c) Creating more hierarchies",
      "d) Removing high-cardinality columns that are not needed, such as transaction identifiers and second-level timestamps"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Measures are metadata and consume almost no space.",
      "b": "Is not correct. Caching consumes additional memory rather than reducing the model.",
      "c": "Is not correct. Hierarchies add negligible size.",
      "d": "Is correct. High-cardinality columns dominate dictionary size, so removing or reducing them yields the largest savings."
    }
  },
  {
    "id": 280,
    "question": "Which statement about query caching for a semantic model is MOST accurate?",
    "options": [
      "a) It removes the need to refresh the model",
      "b) It is enabled by default for every model",
      "c) It caches DirectQuery results at the source",
      "d) It is available for imported models and can improve the experience for frequently opened reports, at the cost of memory"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Refresh still determines the data the cache serves.",
      "b": "Is not correct. It is an opt-in setting.",
      "c": "Is not correct. It does not cache at the data source.",
      "d": "Is correct. Query caching stores report query results for cached models, trading memory for faster initial load of popular reports."
    }
  },
  {
    "id": 281,
    "question": "You have a semantic model that uses Direct Lake on SQL analytics endpoint storage mode on an F8 capacity. After a large data load, reports become slow and monitoring shows queries being served by DirectQuery. What is the MOST likely explanation?",
    "options": [
      "a) The lakehouse tables were vacuumed",
      "b) The report has too many bookmarks",
      "c) The table grew beyond the capacity's Direct Lake guardrails, so queries fall back",
      "d) Query caching is disabled"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Vacuuming removes unreferenced files and does not cause fallback by itself.",
      "b": "Is not correct. Bookmarks do not change the query path.",
      "c": "Is correct. Guardrails such as 300 million rows or 1,000 Parquet files per table on F8 are tied to the SKU; Direct Lake on SQL analytics endpoint falls back to DirectQuery when they are exceeded, whereas Direct Lake on OneLake would fail instead.",
      "d": "Is not correct. Query caching does not cause or prevent Direct Lake fallback."
    }
  },
  {
    "id": 282,
    "question": "Which action would MOST directly improve the first-query experience of a Direct Lake model over a wide gold table?",
    "options": [
      "a) Enabling bidirectional relationships",
      "b) Removing unused columns from the table and writing it with V-Order so less data must be transcoded",
      "c) Adding more visuals to the report",
      "d) Increasing the number of report pages"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Bidirectional filtering adds query cost.",
      "b": "Is correct. Fewer and better-ordered columns mean less transcoding work when a column is first requested.",
      "c": "Is not correct. More visuals increase the number of queries.",
      "d": "Is not correct. Page count does not affect transcoding."
    }
  },
  {
    "id": 283,
    "question": "Which statement about the effect of many small Delta files on a Direct Lake model is MOST accurate?",
    "options": [
      "a) Many small files increase the work needed to load column segments, so compaction with OPTIMIZE helps",
      "b) Direct Lake cannot read tables with more than one file",
      "c) Small files improve Direct Lake performance by increasing parallelism",
      "d) File count is irrelevant because the model caches everything at publish time"
    ],
    "correct_answer": "A",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is correct. Well-sized files reduce metadata and read overhead, which is why compaction is part of preparing tables for Direct Lake.",
      "b": "Is not correct. Multi-file tables are normal.",
      "c": "Is not correct. Excessive fragmentation adds overhead rather than useful parallelism.",
      "d": "Is not correct. Direct Lake loads data on demand from the files."
    }
  },
  {
    "id": 284,
    "question": "Which measure rewrite is MOST likely to improve performance?",
    "options": [
      "a) Replacing FILTER inside CALCULATE with a simple column predicate where the logic allows",
      "b) Converting measures into calculated columns on the fact table",
      "c) Wrapping every measure in CALCULATE without filters",
      "d) Replacing SUM with SUMX over the same column"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. A simple predicate can be pushed into the storage engine, whereas a FILTER over a table often forces formula engine iteration.",
      "b": "Is not correct. Materializing calculations per row increases model size and refresh time without making aggregation faster.",
      "c": "Is not correct. A redundant CALCULATE adds no benefit and can introduce unintended context transition.",
      "d": "Is not correct. Replacing a native aggregation with an iterator adds work."
    }
  },
  {
    "id": 285,
    "question": "Which statement about report design and semantic model performance is MOST accurate?",
    "options": [
      "a) Slicers are free because they do not query the model",
      "b) Adding visuals reduces load because results are shared",
      "c) The number of visuals has no effect because queries are batched into one",
      "d) Each data-bound visual generates at least one query, so pages crowded with visuals multiply the load on the model"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Slicers query the model for their values and selections.",
      "b": "Is not correct. More visuals means more queries.",
      "c": "Is not correct. Visuals issue their own queries.",
      "d": "Is correct. Reducing the number of visuals per page is one of the simplest ways to cut total query load and rendering time."
    }
  },
  {
    "id": 286,
    "question": "Which statement about refresh monitoring for a production semantic model is MOST accurate?",
    "options": [
      "a) Refresh failures always retry until they succeed",
      "b) Only Fabric administrators can see refresh history",
      "c) Failure notifications should be sent to a monitored group mailbox or team, not only to the original author",
      "d) Refresh history is unavailable in the service"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Retries are limited and persistent failures remain failed.",
      "b": "Is not correct. Users with access to the item can view its refresh history.",
      "c": "Is correct. Routing alerts to a shared, monitored destination ensures failures are seen even when an individual is unavailable.",
      "d": "Is not correct. Refresh history is available per item and in the Monitoring hub."
    }
  },
  {
    "id": 287,
    "question": "A nightly Import refresh consumes so much capacity that morning report users are delayed. Which combination of actions addresses this BEST?",
    "options": [
      "a) Disable smoothing for the capacity",
      "b) Increase the number of visuals per page so fewer pages are opened",
      "c) Move the refresh earlier or to a quieter window, and reduce its cost with incremental refresh and a smaller model",
      "d) Switch the model to DirectQuery so no refresh is needed"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Smoothing is a platform behavior that cannot be switched off and it helps rather than harms.",
      "b": "Is not correct. Crowding pages increases query load.",
      "c": "Is correct. Shifting heavy background work away from peak interactive time and reducing the refresh cost attacks both the timing and the magnitude of the problem.",
      "d": "Is not correct. DirectQuery removes refresh but shifts the cost to every user interaction."
    }
  },
  {
    "id": 288,
    "question": "Which statement about using the XMLA endpoint to manage partitions is TRUE?",
    "options": [
      "a) It can only read metadata, never trigger processing",
      "b) It requires the model to be in DirectQuery mode",
      "c) It allows tools and scripts to process individual partitions of a table rather than the whole model",
      "d) It bypasses row-level security for all users"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Write operations including refresh are supported.",
      "b": "Is not correct. Cached models are the typical target for partition processing.",
      "c": "Is correct. With read-write XMLA access, tools can perform partition-level processing, which is essential for very large models.",
      "d": "Is not correct. Security still applies to querying identities."
    }
  },
  {
    "id": 289,
    "question": "Which statement about the Best Practice Analyzer is MOST accurate?",
    "options": [
      "a) It rewrites DAX automatically without review",
      "b) It measures report rendering time",
      "c) It optimizes Delta files in the lakehouse",
      "d) It scans a semantic model against configurable rules and reports violations such as missing DIVIDE or floating point keys"
    ],
    "correct_answer": "D",
    "k_level": "K1",
    "points": "1",
    "justification": {
      "a": "Is not correct. Some rules offer fixes, but changes are applied deliberately by the developer.",
      "b": "Is not correct. Rendering time is measured by Performance Analyzer.",
      "c": "Is not correct. Delta maintenance is unrelated.",
      "d": "Is correct. The Best Practice Analyzer applies a rule set to model metadata and lists the objects that violate each rule."
    }
  },
  {
    "id": 290,
    "question": "A model contains a 400-million-row fact table and users only ever analyze by month. Which change reduces cost the MOST while meeting requirements?",
    "options": [
      "a) Create a perspective for each department",
      "b) Enable query caching",
      "c) Summarize the fact table to the monthly grain in the gold layer",
      "d) Add more measures using variables"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Perspectives are a presentation feature with no performance benefit.",
      "b": "Is not correct. Caching helps repeated queries but leaves the large table in memory.",
      "c": "Is correct. Storing data at the grain the business actually uses dramatically reduces rows, memory, and query cost.",
      "d": "Is not correct. Measure hygiene does not reduce row count."
    }
  },
  {
    "id": 291,
    "question": "Which statement about aggregation precedence is TRUE?",
    "options": [
      "a) Precedence determines which report opens first",
      "b) Precedence determines the order in which the engine considers multiple aggregation tables, with higher precedence evaluated first",
      "c) Precedence controls the refresh order of partitions",
      "d) Precedence sets the row-level security priority"
    ],
    "correct_answer": "B",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Report ordering is unrelated.",
      "b": "Is correct. When several aggregations could satisfy a query, precedence tells the engine which to consider first, so the coarsest useful aggregation can be preferred.",
      "c": "Is not correct. Refresh order is controlled by the refresh operation.",
      "d": "Is not correct. Role filters are combined as a union with no precedence."
    }
  },
  {
    "id": 292,
    "question": "Which statement about monitoring capacity impact of a semantic model is MOST accurate?",
    "options": [
      "a) Only Spark consumption is visible",
      "b) Model consumption appears only in the audit log",
      "c) The Fabric Capacity Metrics app attributes interactive and background operations to items, so a model's query and refresh consumption can be identified",
      "d) Capacity consumption cannot be attributed to individual items"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. All Fabric workloads are reported.",
      "b": "Is not correct. Audit logs record activities, not capacity units.",
      "c": "Is correct. The metrics app breaks consumption down by item and operation type, which is how a costly model or refresh is found.",
      "d": "Is not correct. Item-level attribution is a core feature of the app."
    }
  },
  {
    "id": 293,
    "question": "Which practice BEST prevents a semantic model from slowly degrading as new requirements are added?",
    "options": [
      "a) Allow every author to add measures directly to the production model without review",
      "b) Move all logic into report-level measures",
      "c) Review changes through source control, run best practice checks, and validate performance against a baseline before release",
      "d) Increase the capacity SKU each quarter"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Unreviewed changes are how duplication and slow patterns accumulate.",
      "b": "Is not correct. Report-level logic fragments definitions and cannot be governed.",
      "c": "Is correct. Review, automated rule checks, and a performance baseline catch regressions before users experience them.",
      "d": "Is not correct. Buying more compute masks inefficiency and grows cost indefinitely."
    }
  },
  {
    "id": 294,
    "question": "Which statement about testing a model change before release is MOST accurate?",
    "options": [
      "a) Testing is only needed for Import models",
      "b) Changes should be tested directly in production because that is where the real data is",
      "c) Only the model author can judge correctness, so testing is unnecessary",
      "d) Measure results and key totals should be compared against the source system, and representative report queries timed, in a non-production stage"
    ],
    "correct_answer": "D",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Every storage mode needs validation.",
      "b": "Is not correct. Production testing exposes users to defects.",
      "c": "Is not correct. Independent verification is the point of testing.",
      "d": "Is correct. Correctness reconciliation plus timing of representative queries in a test stage is what makes a release safe."
    }
  },
  {
    "id": 295,
    "question": "Which statement about DirectQuery performance tuning for a warehouse-backed model is MOST accurate?",
    "options": [
      "a) Each visual always produces exactly one lightweight query, so tuning is unnecessary",
      "b) Bidirectional relationships improve DirectQuery performance",
      "c) Reducing the number of visuals, avoiding bidirectional relationships, and adding aggregations all reduce the number and cost of generated queries",
      "d) Performance depends only on the capacity size"
    ],
    "correct_answer": "C",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Some visuals generate several queries, and their cost varies widely.",
      "b": "Is not correct. Bidirectional filtering generates more complex queries.",
      "c": "Is correct. In DirectQuery, every interaction becomes source queries, so reducing their number and complexity is the primary tuning lever.",
      "d": "Is not correct. Model and report design matter at least as much."
    }
  },
  {
    "id": 296,
    "question": "A semantic model is refreshed hourly but the underlying gold tables are loaded only once a day. What should be changed?",
    "options": [
      "a) Align the refresh with the data load, ideally by orchestrating it after the load in the pipeline",
      "b) Nothing, because more refreshes are always better",
      "c) Increase the capacity to handle the refreshes",
      "d) Switch the model to DirectQuery"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Triggering the refresh from the load pipeline removes wasted refreshes and guarantees the model reflects the newest data as soon as it exists.",
      "b": "Is not correct. Refreshing unchanged data wastes capacity for no benefit.",
      "c": "Is not correct. Paying for pointless work is not a solution.",
      "d": "Is not correct. Changing storage mode is unnecessary and shifts cost to query time."
    }
  },
  {
    "id": 297,
    "question": "Which statement about semantic model size and the capacity SKU is MOST accurate?",
    "options": [
      "a) Reducing model size has no effect on capacity consumption",
      "b) Model size is irrelevant to the capacity, because models are stored on disk only",
      "c) Larger SKUs allow larger in-memory models and higher Direct Lake guardrails, so sizing must consider both data volume and concurrency",
      "d) Every SKU supports the same maximum model size"
    ],
    "correct_answer": "C",
    "k_level": "K2",
    "points": "1",
    "justification": {
      "a": "Is not correct. Smaller models consume less memory and less compute per query.",
      "b": "Is not correct. Cached and transcoded data occupies capacity memory.",
      "c": "Is correct. Memory limits and Direct Lake guardrails scale with the SKU, so capacity choice depends on model size and the number of concurrent users.",
      "d": "Is not correct. Limits differ per SKU."
    }
  },
  {
    "id": 298,
    "question": "Which approach BEST identifies which columns in a large model are never used by any report?",
    "options": [
      "a) Run VACUUM on the lakehouse tables",
      "b) Combine VertiPaq Analyzer size data with model dependency and usage information, for example from report metadata and usage metrics",
      "c) Delete columns one at a time in production and watch for complaints",
      "d) Ask each report author to guess"
    ],
    "correct_answer": "B",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. VACUUM manages Delta files and says nothing about column usage.",
      "b": "Is correct. Pairing size analysis with actual dependency and usage data identifies large columns that nothing consumes.",
      "c": "Is not correct. Breaking production to discover dependencies is unacceptable.",
      "d": "Is not correct. Recollection is unreliable across many reports."
    }
  },
  {
    "id": 299,
    "question": "Which statement about optimizing a measure that must compute a ratio over a large table is MOST accurate?",
    "options": [
      "a) Ratios should always be computed as calculated columns",
      "b) Iterating with AVERAGEX over the fact table is the recommended approach",
      "c) Ratios cannot be optimized",
      "d) Storing the numerator and denominator as pre-aggregated columns or measures, and dividing with DIVIDE, is usually faster than iterating row by row"
    ],
    "correct_answer": "D",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is not correct. Row-level ratios do not aggregate correctly and consume memory.",
      "b": "Is not correct. Averaging a ratio across rows gives a different, usually wrong, result and is slower.",
      "c": "Is not correct. Ratio measures respond well to the pattern above.",
      "d": "Is correct. Aggregating both parts with storage engine operations and then dividing avoids expensive per-row evaluation."
    }
  },
  {
    "id": 300,
    "question": "Which combination of settings is MOST appropriate for a Direct Lake model that must serve a very large fact table on a small capacity?",
    "options": [
      "a) Reduce columns and rows to what is needed, write well-sized V-Ordered files, and test with fallback disabled to detect guardrail breaches",
      "b) Convert the model to Import with a full daily refresh",
      "c) Keep every column, enable bidirectional relationships, and accept fallback",
      "d) Disable V-Order on the gold tables to speed up writes"
    ],
    "correct_answer": "A",
    "k_level": "K3",
    "points": "2",
    "justification": {
      "a": "Is correct. Minimizing the data, optimizing the file layout, and setting the Direct Lake behavior to DirectLakeOnly during testing (for Direct Lake on SQL analytics endpoint models) surfaces guardrail breaches instead of hiding them behind fallback.",
      "b": "Is not correct. Importing a very large table on a small capacity is likely to fail or be very slow.",
      "c": "Is not correct. That maximizes memory pressure and hides fallback behind poor performance.",
      "d": "Is not correct. Disabling V-Order harms exactly the read path Direct Lake depends on."
    }
  }
]

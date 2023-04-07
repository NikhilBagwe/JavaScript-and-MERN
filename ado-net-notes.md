## Intro :

- ADO.NET stands for ActiveX Data Objects and is developed by MS.
- It is used for Data Management.
- Used for saving, retrieving, updating, deleteing and creating data in a DB
- Acts as bridge between your App and DB
- Provides a rich set of classes, methods and interfaces that allow us to handle data in DB effectively and efficiently.

## ADO.NET Data Providers :

- This are classes inside which the required methods are written to connect your app to a DB.
- Different classes are available for different types of DB.
- Eg: MS SQL Server = System.Data.SqlClient
- Entity Framework ORM = System.Data.EntityClient

## Core Components of Data Providers :

1. Connection - Used to connect app to DB (SqlConnection)
2. Command - Executes SQL query against the data source (SqlCommand)
3. DataReader - Reads data from data source. It can access data only in Read-only and Forward-only(i.e can read rows from 0, 1, 2.. but can't come back to 1) manner.
4. DataSet - Creates a copy of your DB on client machine locally. Thus, operations can be performed faster.
5. DataAdapter - Once the required changes/operations are performed on DataSet, DataAdapter is used to update the data source back with the updated DataSet.

## Connection Object :

- Used to connect App to DB.
- Requires Connection String to make connection.
- Eg. SQL Server = SqlConnection

## Connection String :

- It is a string that combines all the required information that is required to connect to a Data Source.
- Server name, DB name, User name, password, etc.
- Eg: "Data Source = server_name; Initial Catalog = DB_name; Integrated Security = True; UserID = user_id; Password = password;"
- String must be added in web.config file. Can also be added in C# file but it is considered a bad practice

## Query Execution options :

1. ExecuteReader
2. ExecuteScalar
3. ExecuteNonQuery

## DataReader :

- Used to retrieve data from DB in Read-only and Forward-only mode.
- Can't update/delete data in DB.
- If you want to make changes in retrieved data, then use DataAdapter instead.
- By default, DataReader stores 1 row at a time in memory, reducing System overhead.
- Use case: The data can be retrieved and stored in the network buffer in the client at once. Later client can read data using Read method. As data gets stored in one request, performance is increased significantly.

## DataSet :

- Stores a local copy of DB table on client machine. It can be a single or multiple tables.
- It is independent of Data source since it exists on local system. Even if connection is lost, still app will be functional.
- Makes application fast and reliable
- Good for accessing Remote DB, as once you get copy of DB on local machine, you can update it anytime.
- DataSet includes tables, constraints and relationships among tables.
- DataAdapters are used to fill DataSets.

## DataAdapter :

- Acts as a bridge between DataSets and Data source.
- They make connection with data source and then fill retrieved data into DataSets.
- Also updates data source with dataSets.

























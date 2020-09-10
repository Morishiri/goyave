(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{390:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#configuration"}},[t._v("Configuration")]),e("ul",[e("li",[e("a",{attrs:{href:"#drivers"}},[t._v("Drivers")])])])]),e("li",[e("a",{attrs:{href:"#getting-a-database-connection"}},[t._v("Getting a database connection")]),e("ul",[e("li",[e("a",{attrs:{href:"#connection-initializers"}},[t._v("Connection initializers")])])])]),e("li",[e("a",{attrs:{href:"#models"}},[t._v("Models")]),e("ul",[e("li",[e("a",{attrs:{href:"#defining-a-model"}},[t._v("Defining a model")])]),e("li",[e("a",{attrs:{href:"#hidden-fields"}},[t._v("Hidden fields")])]),e("li",[e("a",{attrs:{href:"#automatic-migrations"}},[t._v("Automatic migrations")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Most web applications use a database. In this section, we are going to see how Goyave applications can query a database, using the awesome "),e("a",{attrs:{href:"https://gorm.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gorm ORM"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Database connections are managed by the framework and are long-lived. When the server shuts down, the database connections are closed automatically. So you don't have to worry about creating, closing or refreshing database connections in your application.")]),t._v(" "),e("p",[t._v("All functions below require the "),e("code",[t._v("database")]),t._v(" and the "),e("code",[t._v("gorm")]),t._v(" packages to be imported.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3/database"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gorm.io/gorm"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Very few code is required to get started with databases. There are some "),e("RouterLink",{attrs:{to:"/guide/configuration.html#database-category"}},[t._v("configuration")]),t._v(" options that you need to change though:")],1),t._v(" "),e("ul",[e("li",[e("code",[t._v("database.connection")])]),t._v(" "),e("li",[e("code",[t._v("database.host")])]),t._v(" "),e("li",[e("code",[t._v("database.port")])]),t._v(" "),e("li",[e("code",[t._v("database.name")])]),t._v(" "),e("li",[e("code",[t._v("database.username")])]),t._v(" "),e("li",[e("code",[t._v("database.password")])]),t._v(" "),e("li",[e("code",[t._v("database.options")])]),t._v(" "),e("li",[e("code",[t._v("database.maxOpenConnection")])]),t._v(" "),e("li",[e("code",[t._v("database.maxIdleConnection")])]),t._v(" "),e("li",[e("code",[t._v("database.maxLifetime")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("database.options")]),t._v(" represents the additional connection options. For example, when using MySQL, you should use the "),e("code",[t._v("parseTime=true")]),t._v(" option so "),e("code",[t._v("time.Time")]),t._v(" can be handled correctly. Available options differ from one driver to another and can be found in their respective documentation.")])]),t._v(" "),e("h3",{attrs:{id:"drivers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drivers"}},[t._v("#")]),t._v(" Drivers")]),t._v(" "),e("p",[t._v("The framework supports the following sql drivers out-of-the-box:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("none")]),t._v(" ("),e("em",[t._v("Disable database features")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("mysql")])]),t._v(" "),e("li",[e("code",[t._v("postgres")])]),t._v(" "),e("li",[e("code",[t._v("sqlite3")])]),t._v(" "),e("li",[e("code",[t._v("mssql")])])]),t._v(" "),e("p",[t._v("Change the "),e("code",[t._v("database.connection")]),t._v(" config entry to the desired driver.")]),t._v(" "),e("p",[t._v("In order to be able connect to the database, Gorm needs a database driver to be imported. Add the following import to your "),e("code",[t._v("kernel.go")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3/database/dialect/mysql"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// import _ "github.com/System-Glitch/goyave/v3/database/dialect/postgres"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// import _ "github.com/System-Glitch/goyave/v3/database/dialect/sqlite"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// import _ "github.com/System-Glitch/goyave/v3/database/dialect/mssql"')]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For SQLite, only the "),e("code",[t._v("database.name")]),t._v(" config entry is required.")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("You can "),e("strong",[t._v("register more dialects")]),t._v(" for GORM "),e("a",{attrs:{href:"http://gorm.io/docs/dialects.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like you would usually do"),e("OutboundLink")],1),t._v(". There is one more step required: you need to tell Goyave how to build the connection string for this dialect:")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v3/database"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gorm.io/gorm"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example.com/user/mydriver"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" myDialect "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  db gorm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SQLCommon\n  gorm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultForeignKeyNamer\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dialect implementation...")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gorm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterDialect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-driver"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("myDialect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterDialect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-driver"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{username}:{password}@({host}:{port})/{name}?{options}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mydriver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Open"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Template format accepts the following placeholders, which will be replaced with the corresponding configuration entries automatically:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("{username}")])]),t._v(" "),e("li",[e("code",[t._v("{password}")])]),t._v(" "),e("li",[e("code",[t._v("{host}")])]),t._v(" "),e("li",[e("code",[t._v("{port}")])]),t._v(" "),e("li",[e("code",[t._v("{name}")])]),t._v(" "),e("li",[e("code",[t._v("{options}")])])]),t._v(" "),e("p",[t._v("You cannot override a dialect that already exists.")]),t._v(" "),e("h4",{attrs:{id:"database-registerdialect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-registerdialect"}},[t._v("#")]),t._v(" database.RegisterDialect")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("name string")])]),t._v(" "),e("td",[e("code",[t._v("void")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("template string")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("initializer DialectorInitializer")])]),t._v(" "),e("td")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("DialectorInitializer")]),t._v(" is an alias for "),e("code",[t._v("func(dsn string) gorm.Dialector")])])]),t._v(" "),e("h2",{attrs:{id:"getting-a-database-connection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-database-connection"}},[t._v("#")]),t._v(" Getting a database connection")]),t._v(" "),e("h4",{attrs:{id:"database-getconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-getconnection"}},[t._v("#")]),t._v(" database.GetConnection")]),t._v(" "),e("p",[t._v("Returns the global database connection pool. Creates a new connection pool if no connection is available.")]),t._v(" "),e("p",[t._v("By default, the "),e("a",{attrs:{href:"https://gorm.io/docs/performance.html#Caches-Prepared-Statement",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("PrepareStmt")]),e("OutboundLink")],1),t._v(" option is "),e("strong",[t._v("enabled")]),t._v(".")]),t._v(" "),e("p",[t._v("The connections will be closed automatically on server shutdown so you don't need to call "),e("code",[t._v("Close()")]),t._v(" when you're done with the database.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("*gorm.DB")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("db "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"database-conn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-conn"}},[t._v("#")]),t._v(" database.Conn")]),t._v(" "),e("p",[e("code",[t._v("Conn()")]),t._v(" is a short alias for "),e("code",[t._v("GetConnection()")]),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("*gorm.DB")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("db "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Conn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("First")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Learn how to use the CRUD interface and the query builder in the "),e("a",{attrs:{href:"https://gorm.io/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gorm documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"database-close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-close"}},[t._v("#")]),t._v(" database.Close")]),t._v(" "),e("p",[t._v("If you want to manually close the database connection, you can do it using "),e("code",[t._v("Close()")]),t._v(". New connections can be re-opened using "),e("code",[t._v("GetConnection()")]),t._v(" as usual. This function does nothing if the database connection is already closed or has never been created.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("error")])])])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"connection-initializers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-initializers"}},[t._v("#")]),t._v(" Connection initializers")]),t._v(" "),e("p",[t._v("You can modify the global instance of "),e("code",[t._v("*gorm.DB")]),t._v(" when it's created (and re-created, after a "),e("code",[t._v("Close()")]),t._v(" for example) using "),e("code",[t._v("Initializer")]),t._v(" functions. This is useful if you want to set global settings such as "),e("code",[t._v("gorm:table_options")]),t._v(" and make them effective for you whole application. It is recommended to register initializers "),e("strong",[t._v("before")]),t._v(" starting the application.")]),t._v(" "),e("p",[t._v("Initializer functions are called in order, meaning that functions added last can override settings defined by previous ones.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddInitializer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gorm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SkipDefaultTransaction "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Statement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Settings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gorm:table_options"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENGINE=InnoDB"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"database-addinitializer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-addinitializer"}},[t._v("#")]),t._v(" database.AddInitializer")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("initializer database.Initializer")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("database.Initializer")]),t._v(" is an alias for "),e("code",[t._v("func(*gorm.DB)")])]),t._v(" "),e("li",[t._v("Useful link related to initializers: "),e("a",{attrs:{href:"https://gorm.io/docs/gorm_config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GORM config"),e("OutboundLink")],1)])])]),t._v(" "),e("h4",{attrs:{id:"database-clearinitializers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-clearinitializers"}},[t._v("#")]),t._v(" database.ClearInitializers")]),t._v(" "),e("p",[t._v("Remove all database connection initializer functions.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("h2",{attrs:{id:"models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),e("p",[t._v("A model is a structure reflecting a database table structure. An instance of a model is a single database record. Each model is defined in its own file inside the "),e("code",[t._v("database/model")]),t._v(" directory.")]),t._v(" "),e("h3",{attrs:{id:"defining-a-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-model"}},[t._v("#")]),t._v(" Defining a model")]),t._v(" "),e("p",[t._v("Models are usually just normal Golang structs, basic Go types, or pointers of them. "),e("code",[t._v("sql.Scanner")]),t._v(" and "),e("code",[t._v("driver.Valuer")]),t._v(" interfaces are also supported.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterModel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("User"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    gorm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model\n    Name         "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Age          sql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NullInt64\n    Birthday     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time\n    Email        "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"type:varchar(100);unique_index"`')]),t._v("\n    Role         "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"size:255"`')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set field size to 255")]),t._v("\n    MemberNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"unique;not null"`')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set member number to unique and not null")]),t._v("\n    Num          "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"AUTO_INCREMENT"`')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set num to auto incrementable")]),t._v("\n    Address      "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"index:addr"`')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create index with name `addr` for address")]),t._v("\n    IgnoreMe     "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`gorm:"-"`')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ignore this field")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("All models should be "),e("strong",[t._v("registered")]),t._v(" in an "),e("code",[t._v("init()")]),t._v(" function inside their model file. To ensure the "),e("code",[t._v("init()")]),t._v(" functions are executed before the server starts, import the "),e("code",[t._v("models")]),t._v(" package in your "),e("code",[t._v("kernel.go")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database/model"')]),t._v("\n")])])])]),t._v(" "),e("p",[t._v("Learn more about model declaration in the "),e("a",{attrs:{href:"https://gorm.io/docs/models.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gorm documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"database-registermodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-registermodel"}},[t._v("#")]),t._v(" database.RegisterModel")]),t._v(" "),e("p",[t._v("Registers a model for auto-migration.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("model interface{}")])]),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("h4",{attrs:{id:"database-getregisteredmodels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-getregisteredmodels"}},[t._v("#")]),t._v(" database.GetRegisteredModels")]),t._v(" "),e("p",[t._v("Get the registered models. The returned slice is a copy of the original, so it cannot be modified.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("[]interface{}")])])])])]),t._v(" "),e("h4",{attrs:{id:"database-clearregisteredmodels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-clearregisteredmodels"}},[t._v("#")]),t._v(" database.ClearRegisteredModels")]),t._v(" "),e("p",[t._v("Unregister all models.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Parameters")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[e("code",[t._v("void")])])])])]),t._v(" "),e("h3",{attrs:{id:"hidden-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hidden-fields"}},[t._v("#")]),t._v(" Hidden fields")]),t._v(" "),e("p",[e("Badge",{attrs:{text:"Since v2.9.0"}})],1),t._v(" "),e("p",[t._v("Sometimes you may wish to exclude some fields from your model's JSON form, such as passwords. To do so, you can add the "),e("code",[t._v('model:"hide"')]),t._v(" tag to the field you want to hide.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Username "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Password "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('`model:"hide" json:",omitempty"`')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When a struct is sent as a response through "),e("code",[t._v("response.JSON()")]),t._v(", all its fields (including promoted fields) tagged with "),e("code",[t._v('model:"hide"')]),t._v(" will be set to their zero value. Add the "),e("code",[t._v('json:",omitempty"')]),t._v(" tag to entirely remove the field from the resulting JSON string.")]),t._v(" "),e("p",[t._v("You can also filter hidden fields by passing a struct to "),e("RouterLink",{attrs:{to:"/guide/advanced/helpers.html#helper-removehiddenfields"}},[e("code",[t._v("helper.RemoveHiddenFields()")])]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"automatic-migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-migrations"}},[t._v("#")]),t._v(" Automatic migrations")]),t._v(" "),e("p",[t._v("If the "),e("code",[t._v("database.autoMigrate")]),t._v(" config option is set to true, all registered models will be automatically migrated when the server starts.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Automatic migrations create tables, missing foreign keys, constraints, columns and indexes, and will change existing column’s type if it’s size, precision or nullable changed. They "),e("strong",[t._v("wont't")]),t._v(" delete unused columns.")])]),t._v(" "),e("p",[t._v("If you would like to know more about migrations using Gorm, read their "),e("a",{attrs:{href:"https://gorm.io/docs/migration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);
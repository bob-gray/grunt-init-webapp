<cfcomponent>
    <cfset variables.root = getDirectoryFromPath(getCurrentTemplatePath()) />
    <cfset this.name = left("<%= name %>", hash(root), 64) />
    <cfset this.mappings["/root"] = root />
    <cfset this.mappings["/cfc"] = root &"/cfc" />
    <cfset this.datasource = "<%= datasource %>" />

    <cffunction name="onApplicationStart" access="public" returnType="boolean">

        <cfreturn true />
    </cffunction>

    <cffunction name="onError" access="public" returnType="void">
        <cfargument name="exception" type="any" required="true" />
        <cfargument name="eventName" type="string" required="true" />

        <cfset emailError(arguments.exception) />
        <cfset super.onError(argumentsCollection = arguments) />
    </cffunction>

    <cffunction name="emailError" access="private" returnType="void">
        <cfargument name="exception" type="any" required="true" />
 
        <cfmail
            type="html"
            to="<%= author_email =>"
            from="<%= author_email =>"
            subject="<%= name => Error">
            
            <cfif isDefined("request.user")>
                <cfdump label="user" var="#request.user#" />
            </cfif>
            
            <cfdump label="exception" var="#arguments.exception#" />
        </cfmail>
        
    </cffunction>
</cfcomponent>
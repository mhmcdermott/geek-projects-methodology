# Security Check

Review this project for security issues before sharing. Check:

1. **Authentication** - Is auth required? Domain-restricted?
2. **API Keys** - All in environment variables, none in code?
3. **Inputs** - Are user inputs validated and sanitized?
4. **Data Exposure** - Any customer data in URLs or logs?
5. **Error Messages** - Do they leak internal details?
6. **Dependencies** - Any known vulnerabilities? Run `npm audit`

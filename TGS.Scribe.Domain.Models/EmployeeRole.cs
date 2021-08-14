using System;

namespace TGS.Scribe.Domain.Models
{
    [Flags]
    public enum EmployeeRole
    {
        SuperAdmin = 1,
        Admin = 2,
        Operator = 4
    }
}

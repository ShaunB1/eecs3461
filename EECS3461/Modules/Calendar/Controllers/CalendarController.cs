using Microsoft.AspNetCore.Mvc;

namespace EECS3461.Modules.Calendar.Controllers;

[Route("api/calendar")]
public class CalendarController : ControllerBase
{
    public IActionResult GetDate()
    {
        try
        {
            return Ok(new { date = DateTime.Now });
        }
        catch (Exception ex)
        {
            throw;
        }
    }
}
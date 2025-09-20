using Microsoft.AspNetCore.Mvc;

namespace EECS3461.Modules.Flashcards.Controllers;

[Route("api/flashcards")]
public class FlashcardsController : ControllerBase
{
    public IActionResult GetDate()
    {
        try
        {
            return Ok(new { message = "hello" });
        }
        catch (Exception ex)
        {
            throw;
        }
    }
}
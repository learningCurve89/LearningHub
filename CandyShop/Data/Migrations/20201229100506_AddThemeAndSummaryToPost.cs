using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class AddThemeAndSummaryToPost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "Posts",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Theme",
                table: "Posts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Summary",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Theme",
                table: "Posts");
        }
    }
}

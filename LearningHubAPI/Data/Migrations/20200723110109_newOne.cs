using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class newOne : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostName = table.Column<string>(nullable: true),
                    PostText = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                });

            migrationBuilder.CreateTable(
                name: "Themes",
                columns: table => new
                {
                    ThemeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ThemeName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Themes", x => x.ThemeId);
                });

            migrationBuilder.CreateTable(
                name: "Backends",
                columns: table => new
                {
                    BackendId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BackendName = table.Column<string>(nullable: true),
                    BackendText = table.Column<string>(nullable: true),
                    ThemeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Backends", x => x.BackendId);
                    table.ForeignKey(
                        name: "FK_Backends_Themes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "Themes",
                        principalColumn: "ThemeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Frontends",
                columns: table => new
                {
                    FrontendId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FrontendName = table.Column<string>(nullable: true),
                    FrontendText = table.Column<string>(nullable: true),
                    ThemeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Frontends", x => x.FrontendId);
                    table.ForeignKey(
                        name: "FK_Frontends_Themes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "Themes",
                        principalColumn: "ThemeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Stylings",
                columns: table => new
                {
                    StylingId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StylingName = table.Column<string>(nullable: true),
                    StylingText = table.Column<string>(nullable: true),
                    ThemeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stylings", x => x.StylingId);
                    table.ForeignKey(
                        name: "FK_Stylings_Themes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "Themes",
                        principalColumn: "ThemeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Universities",
                columns: table => new
                {
                    UniversityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UniversityName = table.Column<string>(nullable: true),
                    UniversityText = table.Column<string>(nullable: true),
                    ThemeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universities", x => x.UniversityId);
                    table.ForeignKey(
                        name: "FK_Universities_Themes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "Themes",
                        principalColumn: "ThemeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Backends_ThemeId",
                table: "Backends",
                column: "ThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_Frontends_ThemeId",
                table: "Frontends",
                column: "ThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_Stylings_ThemeId",
                table: "Stylings",
                column: "ThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_Universities_ThemeId",
                table: "Universities",
                column: "ThemeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Backends");

            migrationBuilder.DropTable(
                name: "Frontends");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Stylings");

            migrationBuilder.DropTable(
                name: "Universities");

            migrationBuilder.DropTable(
                name: "Themes");
        }
    }
}

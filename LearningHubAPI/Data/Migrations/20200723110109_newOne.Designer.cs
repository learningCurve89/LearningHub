﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Data.Migrations
{
    [DbContext(typeof(LearningHubContext))]
    [Migration("20200723110109_newOne")]
    partial class newOne
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Data.Models.Backend", b =>
                {
                    b.Property<int>("BackendId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BackendName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BackendText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ThemeId")
                        .HasColumnType("int");

                    b.HasKey("BackendId");

                    b.HasIndex("ThemeId");

                    b.ToTable("Backends");
                });

            modelBuilder.Entity("Data.Models.Frontend", b =>
                {
                    b.Property<int>("FrontendId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FrontendName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FrontendText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ThemeId")
                        .HasColumnType("int");

                    b.HasKey("FrontendId");

                    b.HasIndex("ThemeId");

                    b.ToTable("Frontends");
                });

            modelBuilder.Entity("Data.Models.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PostName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PostText")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PostId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Data.Models.Styling", b =>
                {
                    b.Property<int>("StylingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("StylingName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StylingText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ThemeId")
                        .HasColumnType("int");

                    b.HasKey("StylingId");

                    b.HasIndex("ThemeId");

                    b.ToTable("Stylings");
                });

            modelBuilder.Entity("Data.Models.Theme", b =>
                {
                    b.Property<int>("ThemeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ThemeName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ThemeId");

                    b.ToTable("Themes");
                });

            modelBuilder.Entity("Data.Models.University", b =>
                {
                    b.Property<int>("UniversityId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ThemeId")
                        .HasColumnType("int");

                    b.Property<string>("UniversityName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UniversityText")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UniversityId");

                    b.HasIndex("ThemeId");

                    b.ToTable("Universities");
                });

            modelBuilder.Entity("Data.Models.Backend", b =>
                {
                    b.HasOne("Data.Models.Theme", "Theme")
                        .WithMany()
                        .HasForeignKey("ThemeId");
                });

            modelBuilder.Entity("Data.Models.Frontend", b =>
                {
                    b.HasOne("Data.Models.Theme", "Theme")
                        .WithMany()
                        .HasForeignKey("ThemeId");
                });

            modelBuilder.Entity("Data.Models.Styling", b =>
                {
                    b.HasOne("Data.Models.Theme", "Theme")
                        .WithMany()
                        .HasForeignKey("ThemeId");
                });

            modelBuilder.Entity("Data.Models.University", b =>
                {
                    b.HasOne("Data.Models.Theme", "Theme")
                        .WithMany()
                        .HasForeignKey("ThemeId");
                });
#pragma warning restore 612, 618
        }
    }
}

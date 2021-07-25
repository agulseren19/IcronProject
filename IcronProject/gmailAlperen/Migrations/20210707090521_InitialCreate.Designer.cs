﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using gmailAlperen.Models;

namespace gmailAlperen.Migrations
{
    [DbContext(typeof(emailsContext))]
    [Migration("20210707090521_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("gmailAlperen.Models.emails", b =>
                {
                    b.Property<int>("emailID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("emailContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("readStatus")
                        .HasColumnType("int");

                    b.Property<int>("reciverID")
                        .HasColumnType("int");

                    b.Property<int>("senderID")
                        .HasColumnType("int");

                    b.Property<string>("timeValue")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("emailID");

                    b.ToTable("emails");
                });
#pragma warning restore 612, 618
        }
    }
}

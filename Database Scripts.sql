-- --------------------------------------------------
-- Script started
-- --------------------------------------------------

USE [master]
GO

/****** Object:  Database [FSD]    Script Date: 27-09-2019 07:23:33 ******/
CREATE DATABASE [FSD]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FSD', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\FSD.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'FSD_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\FSD_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO

ALTER DATABASE [FSD] SET COMPATIBILITY_LEVEL = 110
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FSD].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [FSD] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [FSD] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [FSD] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [FSD] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [FSD] SET ARITHABORT OFF 
GO

ALTER DATABASE [FSD] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [FSD] SET AUTO_CREATE_STATISTICS ON 
GO

ALTER DATABASE [FSD] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [FSD] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [FSD] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [FSD] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [FSD] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [FSD] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [FSD] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [FSD] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [FSD] SET  DISABLE_BROKER 
GO

ALTER DATABASE [FSD] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [FSD] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [FSD] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [FSD] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [FSD] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [FSD] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [FSD] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [FSD] SET RECOVERY FULL 
GO

ALTER DATABASE [FSD] SET  MULTI_USER 
GO

ALTER DATABASE [FSD] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [FSD] SET DB_CHAINING OFF 
GO

ALTER DATABASE [FSD] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [FSD] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [FSD] SET  READ_WRITE 
GO




USE [FSD];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Parent_Task'
CREATE TABLE [dbo].[Parent_Task] (
    [Parent_Id] int IDENTITY(1,1) NOT NULL,
    [Parent_Task] nvarchar(100)  NULL
);
GO

-- Creating table 'Project'
CREATE TABLE [dbo].[Project] (
    [Project_Id] int IDENTITY(1,1) NOT NULL,
    [Project_Name] varchar(100)  NOT NULL,
    [Start_Date] datetime  NOT NULL,
    [End_Date] datetime  NOT NULL,
    [Priority] int  NOT NULL,
    [Manager_Id] int  NOT NULL
);
GO

-- Creating table 'Task'
CREATE TABLE [dbo].[Task] (
    [Task_Id] int IDENTITY(1,1) NOT NULL,
    [Task_Name] varchar(100)  NOT NULL,
    [Project_Id] int  NOT NULL,
    [Parent_Id] int  NULL,
    [Start_Date] datetime  NOT NULL,
    [End_Date] datetime  NOT NULL,
    [Priority] int  NOT NULL,
    [Staus] bit  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [User_Id] int IDENTITY(1,1) NOT NULL,
    [First_Name] varchar(50)  NOT NULL,
    [Last_Name] varchar(50)  NOT NULL,
    [Employee_id] int  NOT NULL,
    [Project_Id] int  NULL,
    [Task_Id] int  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Parent_Id] in table 'Parent_Task'
ALTER TABLE [dbo].[Parent_Task]
ADD CONSTRAINT [PK_Parent_Task]
    PRIMARY KEY CLUSTERED ([Parent_Id] ASC);
GO

-- Creating primary key on [Project_Id] in table 'Project'
ALTER TABLE [dbo].[Project]
ADD CONSTRAINT [PK_Project]
    PRIMARY KEY CLUSTERED ([Project_Id] ASC);
GO

-- Creating primary key on [Task_Id] in table 'Task'
ALTER TABLE [dbo].[Task]
ADD CONSTRAINT [PK_Task]
    PRIMARY KEY CLUSTERED ([Task_Id] ASC);
GO

-- Creating primary key on [User_Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([User_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Parent_Id] in table 'Task'
ALTER TABLE [dbo].[Task]
ADD CONSTRAINT [FK_Task_Parent_Task]
    FOREIGN KEY ([Parent_Id])
    REFERENCES [dbo].[Parent_Task]
        ([Parent_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Task_Parent_Task'
CREATE INDEX [IX_FK_Task_Parent_Task]
ON [dbo].[Task]
    ([Parent_Id]);
GO

-- Creating foreign key on [Project_Id] in table 'Task'
ALTER TABLE [dbo].[Task]
ADD CONSTRAINT [FK_Task_Project]
    FOREIGN KEY ([Project_Id])
    REFERENCES [dbo].[Project]
        ([Project_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Task_Project'
CREATE INDEX [IX_FK_Task_Project]
ON [dbo].[Task]
    ([Project_Id]);
GO

-- Creating foreign key on [Project_Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_Users_Project]
    FOREIGN KEY ([Project_Id])
    REFERENCES [dbo].[Project]
        ([Project_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Project'
CREATE INDEX [IX_FK_Users_Project]
ON [dbo].[Users]
    ([Project_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
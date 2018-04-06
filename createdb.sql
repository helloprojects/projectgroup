CREATE Database MyMovieList;
create table Users(
    userID int NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    email varchar(20) NOT NULL,
    PRIMARY KEY (userID)
);

create table Movies(
	TMDB_ID int NOT NULL, 
	userID int NOT NULL,
    title varchar(20) NOT NULL,
    genre varchar(20) NOT NULL,
    rating decimal(3,1) NOT NULL,
	watched varchar(1) NOT NULL,
    year int NOT NULL,
    PRIMARY KEY (TMDB_ID)
);

create table Reviews(
    userID int NOT NULL,
    TMDB_ID int NOT NULL,
    review_title varchar(45) NOT NULL,
    rating decimal(3,1) NOT NULL,
    review TEXT(255) NOT NULL,
    PRIMARY KEY (TMDB_ID, userID)
);

ALTER TABLE Movies ADD CONSTRAINT  moviesfk FOREIGN KEY (userID) REFERENCES Users(userID);
ALTER TABLE Reviews ADD CONSTRAINT reviewsfk2 FOREIGN KEY (userID) REFERENCES Users(userID);
ALTER TABLE Reviews ADD CONSTRAINT reviewsfk1 FOREIGN KEY (TMDB_ID) REFERENCES Movies(TMDB_ID);
Code Challenge 3: Treats!
===

Your front-end developer has created all of the client-side code necessary to view, add, update, and delete treats from the treats database. In fact, said developer even stubbed out most of your server-side code as well!

A server-side developer has started creating the routes needed to make this application work.

* `GET /treats` returns a list of potential treats (e.g. cupcakes, etc) and their image URLs

Tech: PostgreSQL
---

Base Mode:
===

## Setup

### Server

**IMPORTANT:** Make sure to start postgres.

1. Fork and clone repo.
2. `npm install` to get all dependencies.
3. `npm start` to start server.

### Database

Create a database names "treatsDB" wih a table as described below:

```SQL
CREATE TABLE treats (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	description text,
	pic varchar(255)
);
```

Some starter data:

```SQL
INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
```

## TODO

Baseline
==

We need to be able to add new treats.

- [ ] `POST /treats` expects a treat name, description and link to a url image.

Hard Mode:
===

Our client will be ecstatic if we can also deliver the ability to update and
delete, but consider these "nice-to-haves".

- [ ] `PUT /treats/:id` updates the treat description
- [ ] `DELETE /treats/:id` deletes a treat

Pro Mode:
===

You might need to research query strings and express. 

- [ ] `GET /treats?q=donut` should return only treats that match the query parameter

---

_Remember to use best practices:_
---

- add, commit, and push working code at regular intervals
- update the project's readme.md

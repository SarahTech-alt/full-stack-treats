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
3. Setup database as  described below

### Database

**On npm install, a script will run that creates the database for you.**

If it's NOT created, use the info below.

Table created in "treatsDB" database:

```SQL
CREATE TABLE treats (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	description text,
	pic varchar(255)
);
```
Treats table starter data:

```SQL
INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
```

Test your project: `npm start` to start server. Open http://localhost:3000/ in your browser and you should see something like the following:

![start](images/start.png)

## TODO

### Baseline
Before we can launch, we at least need to be able to add new treats.

- [ ] `POST /treats` expects a treat name, description and link to a url image

Once working you should be able to enter new treat info as such:

![adding](images/adding.png)

After adding the treat the page should update:

![added](images/added.png)

And the new info should be in your table:

![dbUpdated](images/dbUpdated.png)

Hard Mode:
===
### Special Sauce
Our client will be ecstatic if we can also deliver the ability to update and
delete, but consider these "nice-to-haves".

- [ ] `PUT /treats/:id` updates the treat description
- [ ] `DELETE /treats/:id` deletes a treat

Pro Mode:
===
### Eye of the Tiger
**If you're feeling fancy and have some time to spare**, try this one. You might need to research query strings and express. 

- [ ] `GET /treats?q=donut` should return only treats that match the query parameter

---

_Remember to use best practices:_
---

- add, commit, and push working code at regular intervals
- update the project's readme.md

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Book.destroy_all


User.create(username: "Sheila Rugut", email: "sheilashee@gmail.com", password: "sheilashee1")
User.create(username: "Mercy Too", email: "mercytoo@gmail.com", password: "mercytoo1")
User.create(username: "Becky Maina", email: "beckymaina@gmail.com", password: "beckymaina1")
User.create(username: "James Kim", email: "jameskim@gmail.com", password: "jameskim1")

Book.create(user_id: 1, title: "The Man Who Was Thursday", author: "G.K. Chesterton", genre: "Thriller", synopsis: "Gabriel Syme is an idealist. During a chance discussion with a policeman, he learns Scotland Yard is more concerned about the subversive plots of intellectuals than the crimes of common thieves and murders.")
Book.create(user_id: 3, title: "Lost Child", author: "Mulk Raj Anand", genre: "Thriller", synopsis: "The Lost Child is a story about a little child who becomes a victim of an unfortunate event. He loses contact with his loved ones in a village fair")
Book.create(user_id: 2, title: "The Garden Party", author: "Katherine Mansfield", genre: "Historical Fiction", synopsis: "The story centres on Laura Sheridan's response to the accidental death of a neighbourhood workman; Laura suggests that, out of respect for the man's family, Laura's family cancel their lavish garden party. Dismissing Laura's feelings as inappropriate and overwrought, her family proceeds with the festivities")
Book.create(user_id: 4, title: "Twilight", author: "Stephenie Meyer", genre: "Horror Fiction", synopsis: "It introduces seventeen-year-old Isabella Swan who moves from Phoenix, Arizona, to Forks, Washington, and finds her life in danger when she falls in love with a vampire, Edward Cullen.")

# Review.create(user_id: 1, book_id: 2, comments:"I love this book! Truly amazing and I will never get bored of it.")
# Review.create(user_id: 3, book_id: 4, comments:"This is one of those books that can be reread millions of time. A supernatural theme with a perfect blend of romance makes it one of the best young adult fantasy fiction novel.")
# Review.create(user_id: 4, book_id: 1, comments:"BEST BOOK EVER.It is honestly the best book to ever be written.")
# Review.create(user_id: 1, book_id: 4, comments:"It was a great book. Each ending to a chapter made me want to read more!")

puts "Seeding done!"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'date'

puts "seeding blogs"
blog1 = Blog.create(content: "I absolutely despise the stereotypical LinkedIn post, because it always feels like a mess of corporate jargon and sanitized vocabulary. And rightfully so, this is a more professional space than a site like Twitter. But because of this spite, I have avoided posting on here and putting my professional persona out there.

Recently, I have begun to realize how important it is to regularly post on LinkedIn. Not just because of the engagement, but because it holds you accountable and pushes you, even on days you don't want to. And today, I think I need that a little bit more than I did before.

So, here goes, I'm going to post more regularly on here, because I think it will help me hold myself accountable to do the necessary work every day, even on bad days where 'necessary' could very well mean 'bare minimum,' or on good days were it could mean 'above and beyond.' I also just want to connect with people and maybe make someone laugh every now and then.

And to make myself more excited to do this, I'm not going to treat it like a corporate email chain, or a memo to my boss. I'll post genuinely, honestly, and authentically. And you can bet I'll absolutely be cutting the BS, because like I said, I absolutely despise it.

Here's to the job search, the grind, the failures, the headaches, the OBNOXIOUS LinkedIn posts, and hopefully the eventual successes.", title: "A LinkedIn Rant", post_date: "Tue, 20 Feb 2023 13:38:43 -0500", image: "https://www.squiresgroup.com/wp-content/uploads/2020/02/Mar-20-blog-2-LinkedIn-recommendations-002.jpg")

blog2 = Blog.create(content: "In the past 3-4 weeks, I've probably sent out well over 100 job applications. Fingers crossed we eventually hear something back. On the bright side, I completed a mock technical interview through SkilledInc, and it went extremely well! That alone instilled a lot of confidence in me that as soon as I get to the interview stage, we're going to lock it in for sure.

The hunt continues. Not going to pretend like it doesn't suck, because it does, but I know something is coming up soon! Staying optimistic.", title: "Job Application Woes", post_date: "Tue, 24 Feb 2023 13:00:00 -0500", image: "https://www.thebalancemoney.com/thmb/erUgdJyye75DsY5ZmqoZfp4kk88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/employment-application-form-with-pen--document-is-mock-up-1128856629-5c65728146e0fb00017c2807.jpg")

# Nook Services

Nook Services is a JS React/Redux web application meant as a companion for the Nintendo Switch game Animal Crossing New Horizons. The application hosts a list of informational pages about different collectible items and game mechanics. Pages include collection trackers for both Bugs and Fish, as well as informational pages about Mystery Islands, Flower breeding, and the Stalk Market. Signing up in the application allows the user to persist collectible tracking data.

## Installation

The Rails API back end repo can be found here: https://github.com/kjdowns/nook-services-api

Fork and clone both repositories before attempting to launch the application.

Starting up Rails Server:

First run `bundle install` to install all the necessary gems.
Then run `rails db:migrate` and `rails db:seed` to build and initialize the database.

After the database has been initialized and seeded run `rails s -p 3001` to start the server.

Starting up React/Redux application:

Make sure you have started the rails server by following the steps above.

Run `npm install` to install all necessary dependencies.
Run `npm start` to start the application. The application can be navigated to in any browser at http://localhost:3000

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/'kjdowns'/nook-services. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Nook Services project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/kjdowns/nook-services/blob/master/CODE_OF_CONDUCT.md).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

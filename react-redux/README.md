<img width="100%" src="https://raw.githubusercontent.com/SolidStateGroup/bullet-train-frontend/master/hero.png"/>

## Bullet Train with React and Redux
This repository contains basic integration with React without and Redux.

## Installation
```
npm i 
```

## Running
```
npm s
```

## How it works
 - Bullet train is initialised in index.js with an environment 
 - When it receives updates it dispatches an event.
 - The store updates the state according to ***instant_messaging*** feature flag and ***font_size*** in the Bullet Train   
 - The main application (App.js) is subscribed to the store and recieves this state as props and renders accordingly.
 
## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates. 

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.


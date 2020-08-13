let showsList = document.querySelector('.shows__container');

let mainHeading = [ 'Shows' ];

// Following creates "Shows" heading
const createMainHeading = (Mheading) => {
	const MainHeadingEl = document.createElement('h2');

	MainHeadingEl.innerText = Mheading;
	MainHeadingEl.classList.add('main__heading');

	return MainHeadingEl;
};

mainHeading.forEach((shows) => {
	const MainHeadingEl = createMainHeading(shows);
	showsList.appendChild(MainHeadingEl);
});

// Following creates table heading (Date, Venue, Location)

let showsHeading = [
	{
		when: 'DATE',
		task: 'VENUE',
		where: 'LOCATION'
	}
];


const createShowsElement = (showsData) => {
	const showsHeadingEl = document.createElement('section');
	const showsHeadingWhen = document.createElement('h5');
	const showsHeadingTask = document.createElement('h5');
	const showsHeadingWhere = document.createElement('h5');

    showsHeadingEl.classList.add('shows__heading');

	showsHeadingWhen.innerText = showsData.when;
	showsHeadingWhen.classList.add('shows__heading-one');
	showsHeadingEl.appendChild(showsHeadingWhen);

	showsHeadingTask.innerText = showsData.task;
	showsHeadingTask.classList.add('shows__heading-two');
	showsHeadingEl.appendChild(showsHeadingTask);

	showsHeadingWhere.innerText = showsData.where;
	showsHeadingWhere.classList.add('shows__heading-three');
	showsHeadingEl.appendChild(showsHeadingWhere);

	return showsHeadingEl;
};

showsHeading.forEach((shows) => {
	const showsHeadingEl = createShowsElement(shows);
	showsList.appendChild(showsHeadingEl);
});

// Following creates info of Date, Venue and Location

let showsInfo = [
    { when: 'DATE',
      date: 'Mon Dec 17 2018',
      task: 'VENUE', 
      venue: 'Ronal Lane',
      where: 'LOCATION',
      location: 'San Francisco',
      buy: 'BUY TICKETS'
   },
  
  { when: 'DATE',
  date: 'Tue Jul 18 2019',
  task: 'VENUE', 
  venue: 'Pier 3 East',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Fri Jul 22 2019',
  task: 'VENUE', 
  venue: 'View Loungue',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Sat Aug 12 2019',
  task: 'VENUE', 
  venue: 'Hyatt Agency',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Fri Sep 05 2019',
  task: 'VENUE', 
  venue: 'Moscow Center',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
  
  { when: 'DATE',
  date: 'Wed Aug 11 2019',
  task: 'VENUE', 
  venue: 'Pres Club',
  where: 'LOCATION',
  location: 'San Francisco',
  buy: 'BUY TICKETS'
  },
      
  ];

const createShowsInfoElement = (infoShow) => {
    const showsInfoEl = document.createElement('section');
    const showsInfoWhen = document.createElement('h3');
    const showsInfoDate = document.createElement('h3');
    const showsInfoTask = document.createElement('h3');
    const showsInfoVenue = document.createElement('h4');
    const showsInfoWhere = document.createElement('h3')
    const showsInfoLocation = document.createElement('h4');
    const buyTickets = document.createElement('button');
    
    showsInfoWhen.innerText = infoShow.when;
    showsInfoWhen.classList.add('shows__heading-style');
    showsInfoEl.appendChild(showsInfoWhen);

    showsInfoDate.innerText = infoShow.date;
    showsInfoDate.classList.add('info__date');
    showsInfoEl.appendChild(showsInfoDate);


    showsInfoTask.innerText = infoShow.task;
    showsInfoTask.classList.add('info__task');
    showsInfoEl.appendChild(showsInfoTask);

    showsInfoVenue.innerText = infoShow.venue;
    showsInfoVenue.classList.add('info__venue');
    showsInfoEl.appendChild(showsInfoVenue);


    showsInfoWhere.innerText = infoShow.where;
    showsInfoWhere.classList.add('info__where');
    showsInfoEl.appendChild(showsInfoWhere);

    showsInfoLocation.innerText = infoShow.location;
    showsInfoLocation.classList.add('info__location');
    showsInfoEl.appendChild(showsInfoLocation);

    buyTickets.innerText = 'BUY TICKETS';
    buyTickets.classList.add('button__buy');
    showsInfoEl.appendChild(buyTickets);

    return showsInfoEl;
};

    showsInfo.forEach((shows) => {
    const showsInfoEl = createShowsInfoElement(shows);
    showsList.appendChild(showsInfoEl);

    });

let showsList = document.querySelector('.shows__container');

let mainHeading = [
    'Shows'
] 

let showsHeading = [
    {
        when: 'DATE',
        task: 'VENUE', 
        where: 'LOCATION',
    }
]

const createMainHeading = Mheading => {
    const MainHeadingEl = document.createElement('h2');

    MainHeadingEl.innerText = Mheading;
    MainHeadingEl.classList.add('main__heading');

    return MainHeadingEl;
}

mainHeading.forEach(shows => {
    const MainHeadingEl = createMainHeading(shows);
    showsList.appendChild(MainHeadingEl);
})

const createShowsElement = showsData => {
    const showsHeadingEl = document.createElement('section');
    const showsHeadingWhen = document.createElement('h5');
    const showsHeadingTask = document.createElement('h5');
    const showsHeadingWhere = document.createElement('h5');

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
}

showsHeading.forEach(shows => {
    const showsHeadingEl = createShowsElement(shows);
    showsList.appendChild(showsHeadingEl);
});
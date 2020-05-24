// var navigationbaranchortags = document.querySelectorAll('#header-nav a');
// console.log(navigationbaranchortags);


// for(let i =1;i <navigationbaranchortags.length;i++)
// {
// 	navigationbaranchortags[i].addEventListener('click',function(event){
// 		event.preventDefault();
// 		var targetSectionId = this.textContent;
// 		console.log(targetSectionId);
// 		var targetSection = document.getElementById(targetSectionId);
// 		console.log(targetSection);

// 		var interval= setInterval(function(){
// 			var targetSectionCoordinates = targetSection.getBoundingClientRect();
// 			console.log(targetSectionCoordinates);
// 			if(targetSectionCoordinates.top<=0)
// 			{
// 				clearInterval(interval);
// 				return;
// 			}
// 			window.scrollBy(0,100);

			
// 		},70);	

// 	});
// }

var skillbars = document.querySelectorAll('div[class*="percentage"]');

function skillbarinitial()
{
	for(let bar of skillbars )
	{
		bar.style.width = 0 +'%';
	}
}

skillbarinitial();


window.addEventListener('scroll',skillbaranimation);
var animationstatus = false;
var animationstatusbars = new Array(skillbars.length);

for(let i = 0;i<skillbars.length;i++)
{
	animationstatusbars[i]=false;
}
function skillbaranimation()
{
	let  i =0;
	for(let bar of skillbars)
	{
		let targetbarcoordinate = bar.getBoundingClientRect().top;
		if(!animationstatusbars[i] && targetbarcoordinate<window.innerHeight)
		{
			console.log('hi');
			let reqwidth = bar.getAttribute('data-skilllevel');
			let currentwidth = 0;
			let interval = setInterval(function(){
					if(currentwidth>=reqwidth)
					{
						clearInterval(interval);
					}
					currentwidth++;
					bar.style.width = currentwidth+'%';
			},5);
			animationstatusbars[i]=true;
		 }//else if(targetbarcoordinate>window.innerHeight)
		// {
		// 	animationstatusbars[i]=false;
		// 	skillbarinitial();
		// }
		i++;
	}



}


// function skillbaranimation()
// {
// 	var skillbarsection = document.getElementById('skill');

// 	var skillbarsectionCoordinates = skillbarsection.getBoundingClientRect();
	
// 	if(!animationstatus && skillbarsectionCoordinates.top<window.innerHeight)
// 	{
		
		
// 		console.log('hi');
// 		for( let i = 0 ;i<skillbars.length;i++)
// 		{
// 			let  skilllevel=skillbars[i].getAttribute('data-skilllevel');
// 			let currentwidth = 0 ;
// 			let interval = setInterval(function(){
// 				currentwidth++;
// 				skillbars[i].style.width=currentwidth+'%';
// 				console.log("width is ",skillbars[i].style.width ,'skilllevel is ' , skilllevel);
// 				if(currentwidth>=skilllevel)
// 				{
// 					clearInterval(interval);
// 				}

// 			},5);
// 		}
// 		animationstatus = true;
// 	}else if (skillbarsectionCoordinates.top>window.innerHeight){
// 		animationstatus = false;
// 		skillbarinitial();
// 	}

// }

# Edvora-Task
This is react app simulate rides it have main parts : Neartest , Upcoming , Past

<section>
<h2> Neartest </h2>
<p> A nearest ride is a ride that includes your station code or a number closest to your station code in the station_path array. 
For example, your station code is 40. So any ride that has your station code as nearest number in station_path array. 
 </p>
 <h4> filter </h4>
 <p> Every ride has state and city. You need to get state and city from every ride object and create a list of state & city for the filters dropdown. 
State : It shows rides from that state only. City: It shows rides from selected city only. If a state is already selected then the city dropdown will have cities from selected state only. 
 </p>
<img src="./public/Screen Shots/main.jpg" >
</section>

<section>
<h2> Upcoming </h2>
<p> It shows all rides which has date in future. </p>
<img src="./public/Screen Shots/Upcoming.jpg" >
</section>


<section>
<h2> Neartest </h2>
<p> It shows all rides which has date in Past. which mean you can track you roads where to go  </p>
<img src="./public/Screen Shots/Past.jpg" >
</section>
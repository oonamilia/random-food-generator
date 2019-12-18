<?php 

if($_POST['ruoka.tyyppi'] = "Ruoka"){
	echo "Ruokaa";
}else{
	echo "Välipalaaa";
}

if(!is_file("../templates/reseptit/$filename.html")){
	$myFile = "../templates/reseptit/$filename.html"; 
	$fh = fopen($myFile, 'w'); 
	$stringData = "";   
		fwrite($fh, $stringData);

		echo " uusi sivu luotu";
		
}

$filen = "../templates/kaikki.html";
$file = fopen($filen, "r"); 
$contents = fread($file,filesize($filen));
$stringData = "
<ul class='rcpUl'><li><a href='#$filename'>$h2</a></li></ul>";   

$lueTdsto = fopen($filen, 'w');
$kirjoitaTdsto = fwrite($lueTdsto, $contents);
$kirjoitaTdsto = fwrite($lueTdsto, $stringData);
fclose($lueTdsto);

?>

<br />

<a href="../index.html"> Takaisin etusivulle </a>
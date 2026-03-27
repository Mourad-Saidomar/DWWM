<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="compteur PREND_LA_VALEUR 0"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tableaux EST_DU_TYPE LISTE" code="1#LISTE#tableaux"/>
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
        <item algoitem="total_nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#total_nb"/>
        <item algoitem="nb_max EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb_max"/>
        <item algoitem="nb_min EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb_min"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="compteur PREND_LA_VALEUR 0" code="5#compteur#0#pasliste"/>
        <item algoitem="AFFICHER &quot;Quel est le nombre d'élement dans ta liste &quot;" code="4#Quel est le nombre d'élement dans ta liste #0"/>
        <item algoitem="LIRE total_nb" code="2#total_nb#pasliste"/>
        <item algoitem="TANT_QUE (compteur&lt;total_nb) FAIRE" code="15#compteur&lt;total_nb">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;Le nombre &quot;" code="4#Le nombre #0"/>
            <item algoitem="AFFICHERCALCUL compteur" code="20#compteur#0"/>
            <item algoitem="AFFICHER &quot;est : &quot;" code="4#est : #0"/>
            <item algoitem="LIRE tableaux[compteur]" code="2#tableaux#compteur"/>
            <item algoitem="compteur PREND_LA_VALEUR compteur+1" code="5#compteur#compteur+1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="nb_max PREND_LA_VALEUR tableaux[0]" code="5#nb_max#tableaux[0]#pasliste"/>
        <item algoitem="POUR compteur ALLANT_DE 0 A total_nb" code="12#compteur#0#total_nb">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (tableaux[compteur]>=nb_max) ALORS" code="6#tableaux[compteur]>=nb_max">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nb_max PREND_LA_VALEUR tableaux[compteur]" code="5#nb_max#tableaux[compteur]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="nb_min PREND_LA_VALEUR tableaux[0]" code="5#nb_min#tableaux[0]#pasliste"/>
        <item algoitem="POUR compteur ALLANT_DE 0 A total_nb" code="12#compteur#0#total_nb">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (tableaux[compteur]&lt;=nb_min) ALORS" code="6#tableaux[compteur]&lt;=nb_min">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nb_min PREND_LA_VALEUR tableaux[compteur]" code="5#nb_min#tableaux[compteur]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le plus petit nombre de la liste est : &quot;" code="4#Le plus petit nombre de la liste est : #0"/>
        <item algoitem="AFFICHERCALCUL nb_min" code="20#nb_min#1"/>
        <item algoitem="AFFICHER &quot;Le plus grand nombre de la liste est : &quot;" code="4#Le plus grand nombre de la liste est : #0"/>
        <item algoitem="AFFICHERCALCUL nb_max" code="20#nb_max#1"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>

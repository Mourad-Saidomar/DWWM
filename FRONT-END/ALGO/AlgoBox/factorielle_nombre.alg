<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHERCALCUL nb_total"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nb_total EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb_total"/>
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
        <item algoitem="total EST_DU_TYPE NOMBRE" code="1#NOMBRE#total"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR compteur ALLANT_DE 1 A nb_total" code="12#compteur#1#nb_total">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="total PREND_LA_VALEUR total*compteur" code="5#total#total*compteur#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Le factorielle de 1 à &quot;" code="4#Le factorielle de 1 à #0"/>
        <item algoitem="AFFICHERCALCUL nb_total" code="20#nb_total#0"/>
        <item algoitem="AFFICHER &quot; est de &quot;" code="4# est de #0"/>
        <item algoitem="AFFICHERCALCUL total" code="20#total#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>

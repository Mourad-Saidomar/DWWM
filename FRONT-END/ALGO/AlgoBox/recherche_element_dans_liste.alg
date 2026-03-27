<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param maxBoucle="500000" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="tableaux EST_DU_TYPE LISTE" code="1#LISTE#tableaux"/>
        <item algoitem="recherche EST_DU_TYPE NOMBRE" code="1#NOMBRE#recherche"/>
        <item algoitem="compteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#compteur"/>
        <item algoitem="nb_position EST_DU_TYPE NOMBRE" code="1#NOMBRE#nb_position"/>
        <item algoitem="total_nb EST_DU_TYPE NOMBRE" code="1#NOMBRE#total_nb"/>
        <item algoitem="position EST_DU_TYPE LISTE" code="1#LISTE#position"/>
        <item algoitem="compte_position EST_DU_TYPE NOMBRE" code="1#NOMBRE#compte_position"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="compteur PREND_LA_VALEUR 0" code="5#compteur#0#pasliste"/>
        <item algoitem="nb_position PREND_LA_VALEUR 0" code="5#nb_position#0#pasliste"/>
        <item algoitem="LIRE total_nb" code="2#total_nb#pasliste"/>
        <item algoitem="TANT_QUE (compteur&lt;total_nb) FAIRE" code="15#compteur&lt;total_nb">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE tableaux[compteur]" code="2#tableaux#compteur"/>
            <item algoitem="compteur PREND_LA_VALEUR compteur+1" code="5#compteur#compteur+1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="LIRE recherche" code="2#recherche#pasliste"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="POUR compteur ALLANT_DE 0 A total_nb" code="12#compteur#0#total_nb">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="SI (tableaux[compteur]==recherche) ALORS" code="6#tableaux[compteur]==recherche">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="nb_position PREND_LA_VALEUR nb_position+1" code="5#nb_position#nb_position+1#pasliste"/>
                <item algoitem="" code="103#commentaire"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="" code="103#commentaire"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="SI (nb_position==0) ALORS" code="6#nb_position==0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Le nombre &quot;" code="4#Le nombre #0"/>
            <item algoitem="AFFICHERCALCUL recherche" code="20#recherche#0"/>
            <item algoitem="AFFICHER &quot; n'est pas dans la liste&quot;" code="4# n'est pas dans la liste#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Le nombre &quot;" code="4#Le nombre #0"/>
                <item algoitem="AFFICHERCALCUL recherche" code="20#recherche#0"/>
                <item algoitem="AFFICHER &quot; se trouve &quot;" code="4# se trouve #0"/>
                <item algoitem="AFFICHERCALCUL nb_position" code="20#nb_position#0"/>
                <item algoitem="AFFICHER &quot; fois dans la liste&quot;" code="4# fois dans la liste#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="" code="103#commentaire"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>

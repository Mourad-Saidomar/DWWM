<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="compteur PREND_LA_VALEUR 1" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#note" algoitem="note EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#compteur" algoitem="compteur EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#result" algoitem="result EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Combien ya de note ?#0" algoitem="AFFICHER &quot;Combien ya de note ?&quot;"/>
        <item code="2#nb#pasliste" algoitem="LIRE nb"/>
        <item code="5#compteur#1#pasliste" algoitem="compteur PREND_LA_VALEUR 1"/>
        <item code="15#compteur&lt;=nb" algoitem="TANT_QUE (compteur&lt;=nb) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Donne la note #0" algoitem="AFFICHER &quot;Donne la note &quot;"/>
            <item code="20#compteur#0" algoitem="AFFICHERCALCUL compteur"/>
            <item code="4# : #0" algoitem="AFFICHER &quot; : &quot;"/>
            <item code="2#note#pasliste" algoitem="LIRE note"/>
            <item code="5#result#result+note#pasliste" algoitem="result PREND_LA_VALEUR result+note"/>
            <item code="5#compteur#compteur+1#pasliste" algoitem="compteur PREND_LA_VALEUR compteur+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#result#result/nb#pasliste" algoitem="result PREND_LA_VALEUR result/nb"/>
        <item code="6#result>=16" algoitem="SI (result>=16) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Très Bien !#0" algoitem="AFFICHER &quot;Très Bien !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#result>=14" algoitem="SI (result>=14) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Bien !#0" algoitem="AFFICHER &quot;Bien !&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#result>=10" algoitem="SI (result>=10) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Passable !#0" algoitem="AFFICHER &quot;Passable !&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="4#Insuffisant !#0" algoitem="AFFICHER &quot;Insuffisant !&quot;"/>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="4# Tu as un moyenne de : #0" algoitem="AFFICHER &quot; Tu as un moyenne de : &quot;"/>
        <item code="20#result#0" algoitem="AFFICHERCALCUL result"/>
        <item code="4#/20.#0" algoitem="AFFICHER &quot;/20.&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

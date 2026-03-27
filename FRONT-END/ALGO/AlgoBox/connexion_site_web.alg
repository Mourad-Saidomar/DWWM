<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_SI" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000" totalAffichages="1000" totalBoucles="5000000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#Identifiant" algoitem="Identifiant EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#password" algoitem="password EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#id_compte" algoitem="id_compte EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#pass_compte" algoitem="pass_compte EST_DU_TYPE CHAINE"/>
        <item code="1#NOMBRE#compteur" algoitem="compteur EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#compteur#1#pasliste" algoitem="compteur PREND_LA_VALEUR 1"/>
        <item code="5#id_compte#&quot;id&quot;#pasliste" algoitem="id_compte PREND_LA_VALEUR &quot;id&quot;"/>
        <item code="5#pass_compte#&quot;pass&quot;#pasliste" algoitem="pass_compte PREND_LA_VALEUR &quot;pass&quot;"/>
        <item code="4#Quel est ton identifiant ?#1" algoitem="AFFICHER &quot;Quel est ton identifiant ?&quot;"/>
        <item code="2#Identifiant#pasliste" algoitem="LIRE Identifiant"/>
        <item code="4#Quel est ton mot de passe ?#1" algoitem="AFFICHER &quot;Quel est ton mot de passe ?&quot;"/>
        <item code="2#password#pasliste" algoitem="LIRE password"/>
        <item code="15#compteur&lt;=3 ET Identifiant!=id_compte OU password!=pass_compte" algoitem="TANT_QUE (compteur&lt;=3 ET Identifiant!=id_compte OU password!=pass_compte) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="6#compteur&lt;3" algoitem="SI (compteur&lt;3) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Erreur de Connexion !#1" algoitem="AFFICHER &quot;Erreur de Connexion !&quot;"/>
                <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
                <item code="4#Quel est ton identifiant ?#1" algoitem="AFFICHER &quot;Quel est ton identifiant ?&quot;"/>
                <item code="2#Identifiant#pasliste" algoitem="LIRE Identifiant"/>
                <item code="4#Quel est ton mot de passe ?#1" algoitem="AFFICHER &quot;Quel est ton mot de passe ?&quot;"/>
                <item code="2#password#pasliste" algoitem="LIRE password"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="6#compteur==3" algoitem="SI (compteur==3) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Compte bloqué !#0" algoitem="AFFICHER &quot;Compte bloqué !&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="5#compteur#compteur+1#pasliste" algoitem="compteur PREND_LA_VALEUR compteur+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="6#Identifiant==id_compte ET password==pass_compte" algoitem="SI (Identifiant==id_compte ET password==pass_compte) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Connexion Réussi !#0" algoitem="AFFICHER &quot;Connexion Réussi !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>

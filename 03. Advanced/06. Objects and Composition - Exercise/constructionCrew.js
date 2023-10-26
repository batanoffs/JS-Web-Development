function constructionCrew(worker){

    if(worker.dizziness === true) {
        let waterReq = 0.1*worker.weight*worker.experience;
        worker.levelOfHydrated += waterReq;
        worker.dizziness = false;
    }
    return worker;
}

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });
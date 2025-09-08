alert("Praise the LORD")
alert("it's well with my soul")
let videosArr = []
let ShakesSphere = document.querySelector(".ShakesSphere");

let Shaking = 100;
let RandomSphere = Math.random();
let Video_Containers = document.querySelector(".Video_Container");



function generateSnowflakes() {
    let area = window.innerWidth * window.innerHeight;
    let snowflakeCount = Math.floor(area / 5000);

    const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    ShakesSphere.innerHTML = "";

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random();
        ShakesSphere.appendChild(snowflake);
    }
}

// Run once
generateSnowflakes();

// Run again if screen size changes
window.addEventListener("resize", generateSnowflakes);

function setSnowDistance() {
    //
    // for (let i = 0; i < Shaking; i++) {
    //     // const snowflake = document.createElement('div');
    //     snowflake.classList.add('snowflake');
    //     snowflake.innerHTML = '❄';
    //     snowflake.style.left = `${Math.random() * 100}vw`
    //     snowflake.style.animationDuration = `${5 + Math.random() * 10}s`
    //     snowflake.style.animationDelay= `${Math.random() * 5}s`
    //     snowflake.style.opacity = Math.random();
    //     ShakesSphere.appendChild(snowflake);
    //     // snowflake.style.setProperty('--falling', `${docHeight + 100}px`);
    // }

}

window.addEventListener('resize', setSnowDistance);

let ArrayOfContent = [
    {
        Section: "Section1",
        Content: `

       <section class="description-section first_description_section">

       
<main class="Section1_Wrapper">
    <div class="Section1_Container">
           
        <section class="head_Section">
            <div class="strongUpload"><strong>Uploaded Video's Preview</strong></div> 
        </section>

        <section class="Main_Upload_Section">
      
        <div class="letWatch">
        <h1>"Let’s Watch – Upload a Video"</h1>
        </div>
        
                <div class="Upload_div1 diving_In">
                    <div class="Uplaod_div1_Container">
                        <p>
                         Add your favorite videos to your personal library with just a few clicks. 
                         Fulltime Video Player lets you store videos securely in your browser using <strong>IndexedDB</strong> — 
                         so your content stays private, offline, and always ready to play.
                        </p>
                    </div>
                    <nav class="Uplaod_div2_Container">
                        <input id="ChooseUpload" style="display: none" for="ChooseUpload" type="file" accept="video/*" multiple>
                        
                       <button class="ChooseUpload">
                           <i class="fas fa-upload"></i>
                           <span>Choose & Upload</span>
                       </button>
                     
                        
                    </nav>
                </div>
                
                <div class="Upload_div2 diving_In">
<!--                <h2>Formats</h2>-->
                 <div class="Supported_Wrapper">
                  <nav class="normal_Supported"><h3>Maximum file size:</h3> <strong>Limited only by your browser’s storage capacity.</strong></nav>
                 <nav class="normal_Supported"><h3>Supported formats:</h3> <strong> MP4, WebM, OGG</strong></nav>
                 </div>
                 </div>
                 
        </section>

        
          
</div>
           
    </main>
     </section>
        `,
        Ondisplay: function(){
            firstSection()
        }
    },

    {
        Section: "Section2",
        Content: `
           <section class="movingElement">
           <div class="Section2_Wrapper_Text">
           
           <div class="SearchName_Wrapper_header">
                <div class="VideoLibrary">
                    <nav class="VideoLibrary_Welcome">
                    <h1>Welcome to your Video Library</h1>
                    <p>Watch all your favorite videos anytime, anywhere</p>
                    </nav>
                    
                    <nav class="VideoLibrary_Description">
                          
                           <div class="VideoLibrary_Description_Container">
                                <div class="Greetings_Wrapper">
                                    <div class="greeting_Container">
                                           <h1 class="greeting_Text"></h1>
                                           <div class="divRolls">
                                                <div class="main_rolls"></div>
                                            </div>
                                           <div class="VideoLength">
                                           <nav class="VideoLenghtNav"></nav>
                               </div>
                                    </div>
                                    <div class="greeting_Container_Text">
                                        <div class="greetings_Video">
                                            <video autoplay muted src="asset/img/Untitled_Project.mp4" class="VideoEnded"></video>
                                        </div>
                                    </div>
                                    
                                </div>
                          </div>
                   
                     </nav>
                  
                </div>
            </div>
            
            
           <div class="SearchName_Wrapper">
                <div class="Search_div">
                       
                       <div class="Search_div_Container">
                         <nav class="nav-back">
                            <span>
                                <i class="fas fa-arrow-right Click-back"></i>
                            </span>
                          </nav>
                       <nav class="Search_Wrapper_nav">
                          <input class="search" type="text" placeholder="Search Videos">
                          <span>🔍</span>
                      </nav>
                        </div>
                </div>
            </div>
            
            
            </div>
            
            <main class="Section2_Wrapper">
        
           </main>
</section>
              
        `,
        Ondisplay: function(){
            SecondPageFunction()

        }
    },

    {
        Section: "Section3",
        Content: `
         
           <main class="Section3_Wrapper">
           
          
<div class="Fulltime-Inner">
      <div class="Fulltime-Inner_Container">
          <div class="Fulltime_header">
             <span class="Camera">
                <i class="fas fa-upload"></i>
             </span>
            <h1>About Our Video Player</h1>
            <p class="Revolutionizing">Revolutionizing Your Viewing Experience</p> 
           </div>  
           
           <div class="About_Main_Container">
           <div class="About_List">
           
           <div class="Video_About_Description">
                 <div class="Main_Video_Description">
                    <div class="_Video-div">
                    <video class="_Video_Video" src="/asset/img/Video.mp4" autoplay muted></video>
                    </div>
                    <div class="_Video_figure">
                        <h3>Welcome to your personal Video library</h3>
                        <p>This is where stories begin</p>
                        <div class="_durations">duration = 0:10</div>
                    </div>
                    </div>
           </div>
           <div class="Video_About_Text">
            <div class="dive_Video_about_text_Wrapper">
            <div class="typingAlone">
            <h2>“🎥 Welcome to Fulltime Video Library…”</h2>
            
            <nav class="Typing">
                <h1 class="MyTyping"></h1>
            </nav>
            <nav class="nav_Videos_Description">
            <h4>Here, every clip is more than just a file; it’s a memory, a story, and a moment worth keeping. With smooth playback, smart previews, and a touch of interactivity, your videos come alive like never before. Hover to explore, click to dive deeper, and let the player guide you seamlessly from one moment to the next. Whether you’re reliving highlights, saving favorites, or simply enjoying your collection, this is where your journey unfolds — one frame at a time.</h4>
            </nav>
            
</div>
</div>
            </div>
              
            </div>
            </div>  
<!--           <div class="About_Main_Down_Text"></div>-->
              
    </div>
</div>
        
            
            
           
    </main>
   
    
        `,
        Ondisplay: function(){
            ThirdFunction()

        }
    }
];
let _Main_Session = document.querySelector("._Main_Session");

function Pages(x,y,callback){
    let page = ArrayOfContent.find(sec => sec.Section === x.id)

    if(page){
        y.innerHTML = page.Content;
    }


    if(callback){
        page.Ondisplay()
    }

}

function ThirdFunction(){
    let _Video_Video = document.querySelector("._Video_Video")
    _Video_Video.addEventListener("ended", function(e){
        this.currentTime = 0;
        this.play();
    });

    let MyTyping = document.querySelector(".MyTyping");
    let ArrayTyped = [
        "“Hover for a quick preview. Click to dive in.”",
    "“Your videos are safe here — always one click away.”",
    "“From the first frame to the last — we’ve got you covered.”"
    ]
    let CurrentIndex = 0;
    let CurrText = 0;
    setInterval(function(){

        setTimeout(function(){


                if(CurrentIndex >= ArrayTyped[CurrText].length){
                    let newText = MyTyping.innerHTML;
                    let newLen = newText.length;


                    MyTyping.innerHTML = newText.slice(0,-1)

                    if(newLen <= 0){
                        CurrText++;
                        CurrentIndex = 0;
                    }

                }


            if(CurrText >= ArrayTyped.length){
                CurrText = 0
            }
        },12000)


        MyTyping.innerHTML += ArrayTyped[CurrText].charAt(CurrentIndex)
        CurrentIndex++;
    }, 200)

}

let pageBtn = document.querySelectorAll(".page");
console.log(pageBtn)




let shake_ing = document.querySelectorAll(".shake_ing");

shake_ing.forEach(sec => {
    sec.addEventListener("click", function(){
        shake_ing.forEach(x => {
            x.classList.add("fa-shake")
            x.style.color = "white";
            x.nextElementSibling.style.textDecoration = "none";
        });
        this.nextElementSibling.style.textDecoration = "underline";
        this.style.color = "gold"
        this.classList.remove("fa-shake");
    })
});


let Page = document.querySelector(".Page");

Page.addEventListener("click", function(){

    if (this) {
        if(!document.body.contains(ShakesSphere)){
            document.body.appendChild(ShakesSphere)
        }
        _Main_Session.innerHTML = `

   <section class="description-section">
                  <main class="Main_description_Wrapper">
            <div class="description_Wrapper">
            <h2 class="welcome">Welcome to Fulltime Smart Video Vault 🎥</h2>
            <p class="description">
                Upload, store, and play your favorite videos right in your browser!
                Our video player leverages the power of <strong>IndexedDB</strong> to let you securely store videos on your own device — no internet required after upload.
            </p>
            <p class="description">
                Whether it's a clip from your gallery or a short film, our player makes it simple and fast to view your content any time.
                Enjoy smooth playback, intuitive controls, and a clean interface designed for an amazing experience.
            </p>
            </div>

    <div class="description_Wrapper_two">
            <div class="Features">
                <strong>Features</strong>
            </div>
            
        <div class="Features_Text">
            <ul style="min-height: fit-content" class="highlight_Container">
                <li class="highlight">📤 Upload and store videos using IndexedDB</li>
                <li class="highlight">▶️ Play videos instantly with built-in video player</li>
                <li class="highlight">🗂 View and manage your personal video collection</li>
                <li class="highlight">🧼 Clean UI and fullscreen support</li>
            </ul>
        </div>
    </div>
            </main>
            
         </section>
         
  
            `
    }
})

document.addEventListener("DOMContentLoaded", function(){
    Page.click()

})

function openMyVideoDB(callback) {
    let request = indexedDB.open("MyVideo", 3);

    request.onupgradeneeded = (event) => {
        let db = event.target.result;
        if (!db.objectStoreNames.contains("videos")) {
            let store = db.createObjectStore("videos", { keyPath: "id", autoIncrement: true });
            store.createIndex("name", "name", { unique: true });
        }
    };

    request.onsuccess = (event) => {
        let db = event.target.result;
        callback(null, db);
    };

    request.onerror = (event) => {
        callback(event.target.error, null);
    };
}


// Function for first Section Begins

function firstSection() {
    let ChooseUpload = document.querySelector("#ChooseUpload");
    let Button = document.querySelector(".ChooseUpload");
    let VideoElements = document.createElement("div");
    VideoElements.className = "newVideoWrapper";


    let db;
    let request = indexedDB.open("MyVideo", 3);

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains("videos")) {
            let store = db.createObjectStore("videos", {keyPath: "id", autoIncrement: true})
            store.createIndex("name", "name", {unique: true})
        }
    }

    request.onsuccess = (event) => {
        db = event.target.result;
        console.log("Database Was Created Successfully.")
    }

    request.onerror = (event) => {
        console.log("Database Was not Created, Error occured: " + event);
    }

    let Main_Upload_Section = document.querySelector(".Main_Upload_Section");

    function ensureStoreExists(callback) {
        if (!db.objectStoreNames.contains("videos")) {
            db.close();
            let req = indexedDB.open("MyVideo", 3); // bump version to trigger upgrade
            req.onupgradeneeded = (event) => {
                let newDB = event.target.result;
                if (!newDB.objectStoreNames.contains("videos")) {
                    let store = newDB.createObjectStore("videos", {keyPath: 'id', autoIncrement: true});
                    store.createIndex("name", "name", {unique: true});
                }

            };
            req.onsuccess = (event) => {
                db = event.target.result;
                callback();
            };
        } else {
            callback();
        }
    }

    ChooseUpload.addEventListener("change", function (event) {
        let newElementPage1 = document.querySelectorAll(".play")
        newElementPage1.forEach(indexes => {
            indexes.classList.add("disabled")
        })
        ensureStoreExists(() => {


            let files = Array.from(event.target.files);
            let checkTx = db.transaction(["videos"], "readonly");
            let store = checkTx.objectStore("videos");
            let index = store.index("name");
            let getAllNames = index.getAll();

            getAllNames.onsuccess = () => {
                let result = getAllNames.result; // array of stored video objects


                let existingVideos = result.map(v => v.name);

                let skippedFiles = files.filter(file => existingVideos.includes(file.name));
                let newFiles = files.filter(file => !existingVideos.includes(file.name));


                if (skippedFiles.length > 0) {

                    alert(
                        "These videos already exist and were skipped:\n" +
                        skippedFiles.map(f => `- ${f.name}`).join("\n")
                    );
                    newElementPage1.forEach(indexes => {
                        indexes.classList.remove("disabled");
                    });

                }

                if (newFiles.length > 0) {
                    newFiles.forEach(file => {
                        let writeTx = db.transaction(["videos"], "readwrite");
                        let writeStore = writeTx.objectStore("videos");
                        let newWrite = writeStore.add({name: file.name, blob: file});

                        newWrite.onsuccess = (event) => {
                            let newId = event.target.result;
                            // console.log(file.name + " stored with ID:", newId);
                            appendSingleVideo(newId);
                        };
                    });
                }
            };

            getAllNames.onerror = (err) => {
                console.error("Error getting video names:", err);
            };
        });
    });


    function recreateStore(callback) {
        db.close();
        let req = indexedDB.open("MyVideo", 3);

        req.onupgradeneeded = (event) => {
            let newDB = event.target.result;
            let store = newDB.createObjectStore("videos", {keyPath: 'id', autoIncrement: true});
            store.createIndex("name", "name", {unique: true});
        };

        req.onsuccess = (event) => {
            db = event.target.result;
            console.log("Store recreated successfully.");
            if (callback) callback();
        };
    }

    function appendSingleVideo(videoId) {

        // Check if store exists before using it
        if (!db.objectStoreNames.contains("videos")) {
            console.warn("Store 'videos' not found. Recreating...");
            recreateStore(() => appendSingleVideo(videoId));
            return;
        }

        let transaction = db.transaction(["videos"], "readonly");
        let store = transaction.objectStore("videos");
        let request = store.get(videoId);
        let newElementPage = document.querySelectorAll(".play");

        request.onsuccess = function () {
            let videoData = request.result;

            if (!videoData){
                newElementPage.forEach(indexes => {
                    indexes.classList.remove("disabled");
                });
                return;
            }



            let div = document.createElement("div");
            div.className = "VideoLoader";

            let loader = document.createElement("div");
            loader.className = "loader";
            div.appendChild(loader);

            let video = document.createElement("video");
            video.style.height = "100%";
            video.style.width = "100%";
            video.src = URL.createObjectURL(videoData.blob);

            video.addEventListener("loadeddata", () => {
                loader.remove();
            });

            video.addEventListener("loadedmetadata", () => {
                let note = Notification();
                note.classList.add("Notification_Active");
                note.innerHTML = "Congratulations your Videos is been uploaded, Now you can delete unwanted videos after 10s this page will be closed, Please Wait...";
                setTimeout(() => {
                    note.classList.remove("Notification_Active");
                    VideoElements.remove();

                    newElementPage.forEach(indexes => {
                        indexes.classList.remove("disabled");
                    });
                    return pageBtn[0].click();
                }, 15000);


                let deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
                deleteBtn.className = "delete_btn";

                deleteBtn.addEventListener("click", () => {
                    let delTx = db.transaction(["videos"], "readwrite");
                    let delStore = delTx.objectStore("videos");
                    delStore.delete(videoData.id);
                    delTx.oncomplete = () => {
                        alert(videoData.name + " deleted");
                        div.remove();

                        if (VideoElements.querySelectorAll(".VideoLoader").length === 0) {
                            VideoElements.remove();
                            newElementPage.forEach(indexes => {
                                indexes.classList.remove("disabled");
                            });
                            pageBtn[0].click();
                        }
                    };
                });

                div.appendChild(video);
                div.appendChild(deleteBtn);
                VideoElements.appendChild(div);


                let allow = document.querySelector("._Main_Session");
                allow.innerHTML = "";
                allow.appendChild(VideoElements);
            });


        }

    }

    Button.addEventListener("click", function () {
        ChooseUpload.click();
        let elementRemove = document.createElement("button")
        elementRemove.className = "removeVideoElement";
        elementRemove.innerHTML = "<i class='fas fa-xmark'></i>";
        elementRemove.style.setProperty("cursor", "pointer")
        elementRemove.onclick = () => {
            VideoElements.remove();
            pageBtn[0].click();
        }
        VideoElements.appendChild(elementRemove);

        // pageBtn[1].click()
    })
    function Notification() {
        let element = document.createElement("div");
        element.className = "Notification";

        VideoElements.appendChild(element);
        return element;
    }

}






    function SecondPageFunction() {
        let VideoEnded = document.querySelector(".VideoEnded")

        VideoEnded.onended = function () {
            this.currentTime = 0
            this.play();
        }

        let newFileWrapper = document.querySelector(".movingElement");
        let WelcomeRmove = document.querySelector(".Section2_Wrapper_Text")

        let db
        let request = indexedDB.open("MyVideo", 3);

        request.onerror = e => {
            console.log("Error While loading Videos", e.target.error);
        };
        request.onupgradeneeded = (event) => {
            db = event.target.result;
            if (!db.objectStoreNames.contains("videos")) {
                let store = db.createObjectStore("videos", {keyPath: "id", autoIncrement: true})
                store.createIndex("name", "name", {unique: true})
            }
        }
        let MyContainer = document.querySelector(".Section2_Wrapper");
        request.onsuccess = e => {
             db = e.target.result;


            //  Check if the "videos" store exists
            if (!db.objectStoreNames.contains("videos")) {

                if (newFileWrapper.contains(WelcomeRmove)) {
                    newFileWrapper.removeChild(WelcomeRmove)
                }
                MyContainer.style.display = "flex";
                MyContainer.style.flexDirection = "column";
                MyContainer.className = "greatVideo";
                MyContainer.innerHTML = `
                <h1>No Video Uploaded Yet</h1>
                <h2>Please Upload your Video</h2>
            `;
                return; // stop here
            }

            // ✅ Only run this if store exists
            let transactions;
            try {
                transactions = db.transaction(["videos"], "readonly");
            } catch (err) {
                console.warn("Store 'videos' not found. Showing empty UI.");
                MyContainer.style.display = "flex";
                MyContainer.style.flexDirection = "column";
                MyContainer.className = "greatVideo";
                MyContainer.innerHTML = `
        <h1>No Video Uploaded Yet</h1>
        <h2>Please Upload your Video</h2>
    `;
                return;
            }
            let store = transactions.objectStore("videos");
            let getAll = store.getAll();


            let newElement = AppendingDiv();
            getAll.onsuccess = () => {
                let videos = getAll.result;

                if (videos.length > 0) {
                    MyContainer.innerHTML = "";

                    videos.forEach((element,index) => {
                        let section = document.createElement("div");
                        section.className = "VideoLoaderSecond";

                        let video = document.createElement("video");
                        video.className = "VideoSecond";
                        video.src = URL.createObjectURL(element.blob);
                        // video.autoplay = true;
                        video.muted = true;


                        video.addEventListener("loadedmetadata", () => {
                            let duration = video.duration;

                            let minutes = Math.floor(duration / 60);
                            let seconds = Math.floor(duration % 60).toString().padStart(2, "0");
                            let durationElement = document.createElement("div");
                            durationElement.className = "VideoDuration";
                            durationElement.innerHTML = `<span>${minutes}</span>:<nav>${seconds}</nav>`;

                            section.appendChild(durationElement)
                        })

                        // video.addEventListener("mouseenter", () => {
                        //     video.play();
                        // });
                        // video.addEventListener("mouseleave", () => {
                        //     video.pause();
                        //     video.currentTime = 0;
                        //
                        // });
                        //
                        //
                        // video.addEventListener("ended", () => {
                        //     video.currentTime = 0;
                        //     video.play();
                        // });

                        let elementLoader = document.createElement("div");
                        elementLoader.className = "ThirdLoader";

                        video.addEventListener("loadeddata", () => {
                            elementLoader.remove();
                        });

                        let span = document.createElement("button");
                        span.className = "XPlayer";
                        span.innerHTML = "<i class='fas fa-play'></i>";

                        let nameElement = document.createElement("div")
                        nameElement.className = "VideoName";
                        nameElement.innerHTML = `${element.name}`;

                        let optionsContainer =  document.createElement("div");
                        optionsContainer.className = "VideoOptionsContainer";
                        optionsContainer.innerHTML = "<i class='fas fa-list-dots rt'></i>";

                        optionsContainer.addEventListener("click", function(){
                            let existingWrapper1 = document.querySelector(".OptionsWrapper");
                            if(existingWrapper1) {
                                existingWrapper1.remove();
                                return
                            }

                            let optionWrapper2 = document.createElement("div")
                            optionWrapper2.className = "OptionsWrapper";
                            let newOption = document.createElement("div");
                            newOption.className = "newOptions";

                            let Array  = ["Rename","Delete"]
                            for(let x = 0; x < Array.length; x++) {
                                let li = document.createElement("button");
                                li.className = "ListOptionWrapper";
                                li.innerHTML = Array[x];


                                li.addEventListener("click", function(){
                                    optionWrapper2.remove()
                                    if(this.innerHTML == "Delete"){

                                         let VideoName = nameElement.innerHTML;
                                        let request = indexedDB.open("MyVideo", 3);

                                        request.onerror = e => {
                                            console.log("Error While loading Video", e.target.error);
                                        }
                                        request.onsuccess = e => {
                                            let db = e.target.result;

                                            let transaction = db.transaction(["videos"], "readwrite");
                                            let store = transaction.objectStore("videos");

                                            let index = store.index("name");
                                            let getRequest = index.get(VideoName);

                                            getRequest.onsuccess = () => {
                                                let record = getRequest.result;
                                                if (record) {
                                                    let deleteRequest = store.delete(record.id);

                                                    deleteRequest.onsuccess = () => {
                                                        alert(`Deleted video: ${record.name}`);
                                                        section.remove();
                                                    };
                                                }
                                            };



                                        }
                                        
                                    }

                                    if(this.innerHTML == "Rename"){
                                        let request = indexedDB.open("MyVideo", 3);

                                        request.onerror = e => {
                                            console.error("Error While loading Video", e.target.error);
                                        }

                                        request.onsuccess = e => {
                                            let VideoNames = nameElement.innerHTML;
                                            let db = e.target.result;

                                            let transaction = db.transaction(["videos"], "readwrite");
                                            let store = transaction.objectStore("videos");

                                            let index = store.index("name");
                                            let getRequest = index.get(VideoNames);

                                            getRequest.onsuccess = () => {
                                                let record = getRequest.result;

                                                if(record) {
                                                    let newName = prompt("Enter Your New Name", record.name);

                                                    if(newName && newName.trim() !== ""){
                                                        // ✅ Ensure new name is unique
                                                        let checkRequest = index.get(newName.trim());

                                                        checkRequest.onsuccess = () => {
                                                            if(checkRequest.result){
                                                                alert("That name already exists. Please choose another one.");
                                                            } else {
                                                                record.name = newName.trim();

                                                                let updatedRequest = store.put(record);

                                                                updatedRequest.onsuccess = () => {
                                                                    alert("✅ Successfully renamed your video!");
                                                                    nameElement.innerHTML = record.name;

                                                                    // 🔥 Make sure search picks up new name
                                                                    transaction.oncomplete = () => {
                                                                        db.close();
                                                                    };
                                                                    store.getAll().onsuccess = e => {
                                                                        videosArr = e.target.result;

                                                                        let searchInput = document.querySelector(".search");



                                                                       if(MyContainer.children.length === 0){
                                                                           searchInput.value = "";
                                                                           SecondPageFunction()
                                                                       }

                                                                        searchInput.dispatchEvent(new Event("input"));
                                                                    }


                                                                };

                                                                updatedRequest.onerror = (e) => {
                                                                    console.log("Error While renaming video", e.target.error);
                                                                };
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                })
                                newOption.append(li);
                            }
                            optionWrapper2.appendChild(newOption);
                            section.appendChild(optionWrapper2);

                        })




                        section.appendChild(nameElement);
                        section.appendChild(span);
                        section.appendChild(elementLoader);
                        section.appendChild(video);
                        section.appendChild(optionsContainer);
                        // newFileWrapper.appendChild(newElement);
                        MyContainer.appendChild(section);


                        video.addEventListener("click", function () {
                            ShakesSphere.remove();
                            let videoPlayerWrapper = document.createElement("div");
                            videoPlayerWrapper.className = "VideoPlayerWrapper";
                            videoPlayerWrapper.innerHTML = `

<div class="VideoPlayer_Container">
<div class="VideoPlayerContainer_Remover">
    <i class="fas fa-xmark Remove"></i>
</div>
    <div class="VideoDiv">
           <video autoplay controls src="${this.src}">
</video>                 
</div>
</div>

`

                            let OverAllContainer = document.querySelector("body")

                            OverAllContainer.appendChild(videoPlayerWrapper);

                            let Remove = document.querySelector(".Remove");

                            Remove.addEventListener("click", function () {
                                if (OverAllContainer.contains(videoPlayerWrapper)) {
                                    OverAllContainer.classList.remove("overflowHidden")
                                    OverAllContainer.removeChild(videoPlayerWrapper);
                                    if (!document.body.contains(ShakesSphere)) {
                                        document.body.appendChild(ShakesSphere)
                                    }
                                }
                            })

                            if (OverAllContainer.contains(videoPlayerWrapper)) {

                                OverAllContainer.scrollTo(0, 0)
                                OverAllContainer.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                                OverAllContainer.classList.add("overflowHidden")
                            } else {
                                OverAllContainer.classList.remove("overflowHidden")
                            }
                        })
                    });
                } else {
                    MyContainer.className = "greatVideo";
                    MyContainer.innerHTML = `
                    <h1>No Video Uploaded Yet</h1>
                    <h2>Please Upload your Video</h2>
                `;
                }
            };
        };

        function AppendingDiv() {
            let element = document.createElement("div");
            element.className = "Section2_Wrapper_Text";
            return element;
        }

        let greetsElement = document.querySelector(".greeting_Container h1");

        function Greeting() {
            let greetings = new Date().getHours();
            let newGreets
            if (greetings >= 5 && greetings < 12) {
                newGreets = "🌅 Good morning! Let’s start your day with a clip.";
            } else if (greetings >= 12 && greetings < 16) {
                newGreets = "☀️ Good afternoon! Perfect time for a quick watch.";
            } else if (greetings >= 16 && greetings < 21) {
                newGreets = "🌆 Good evening! Ready for a cozy movie session?";
            } else {
                newGreets = "🌙 Late night vibes — your videos are ready for you.";
            }

            return newGreets;
        }

        let realGreets = Greeting()
        greetsElement.innerHTML = realGreets;


        (function MovingElement() {
            let main_rolls = document.querySelector(".main_rolls")
            let ArrayOfText = ["🌟 Welcome back! Your stories are waiting to be played.", "🎬 Hey there! Your video library misses! you.", "📺 Welcome home to your collection of memories", "🕊 Your videos are safe, sound, and ready for you", "🙏 ALL THE GLORY MUST BE TO THE LORD"];

            function removing(ll) {
                if (ll && ll.parentNode) return ll.parentNode.removeChild(ll);
            }

            let currentIndex = 0
            let visibleDuration = 3000
            let enterDuration = 800
            let exitDuration = 600
            let Delaying = 50


            function animation() {
                let element = document.createElement("div");
                element.className = "newText enter-from-bottom";
                element.innerHTML = `${ArrayOfText[currentIndex]}`
                main_rolls.appendChild((element));

                setTimeout(() => {
                    element.classList.remove("enter-from-bottom");
                    element.classList.add("centered");
                }, Delaying)

                setTimeout(() => {
                    element.classList.remove("centered");
                    element.classList.add(".exit-to_top")
                }, enterDuration + visibleDuration)


                setTimeout(() => {
                    removing(element);
                    currentIndex = (currentIndex + 1) % ArrayOfText.length;
                    animation()
                }, enterDuration + visibleDuration + 100)
            }

            animation()
        })()

        SecondPageFunction2()
    }


    let sec = document.querySelector("._Main_Session");
    let firstSec = document.querySelector(".Main_Section_Container")
let sectonsVideo = document.querySelector(".Video_Container")
    pageBtn.forEach(btn => {
        let descriptionsection = document.querySelector(".description-section")
        btn.addEventListener("click", function () {
            let btnText = this.nextElementSibling.textContent.trim();
            if (btnText === "VList") {
                firstSec.classList.add("firstSec")
                Pages(this, sec, this);
                if (!document.body.contains(ShakesSphere)) {
                    document.body.appendChild(ShakesSphere)
                }
                return;
            }

            if (!document.body.contains(ShakesSphere)) {
                document.body.appendChild(ShakesSphere)
            }

            document.body.append(ShakesSphere)
            firstSec.classList.remove("firstSec")
            Pages(this, _Main_Session, this)
        })
    });

    let playIcon = document.querySelectorAll(".play")
playIcon.forEach(icon => {
    icon.addEventListener("click", function () {
        let VideoPlayerWrapperRemove = document.querySelector(".VideoPlayerWrapper");
        if (document.body.contains(VideoPlayerWrapperRemove)) {
            document.body.removeChild(VideoPlayerWrapperRemove)
            document.body.classList.remove("overflowHidden")
        }
    })
})


    function SecondPageFunction2() {
        let db;
        let req = indexedDB.open("MyVideo", 3)



        req.onsuccess = (e) => {
            db = e.target.result;

            if (!db.objectStoreNames.contains("videos")) {
                console.log("error occured")
                return
            }
            let transaction = db.transaction(["videos"], "readwrite")
            let store = transaction.objectStore("videos");
            let getAllnames = store.getAll()
            let SearchInput = document.querySelector(".search")

            getAllnames.onsuccess = (ev) => {
                console.log("Fetch Successful")


               videosArr = getAllnames.result;


                SearchInput.addEventListener("input", (e) => {
                    let Click_backs = document.querySelector(".Click-back");

                    let searchInputVal = e.target.value.trim().toLowerCase();


                    let result = videosArr.filter(name => {
                        let Videoname = name.name.toLowerCase().trim();
                        return Videoname.includes(searchInputVal)
                    })


                    let MyContainer = document.querySelector(".Section2_Wrapper");
                    MyContainer.innerHTML = "";

                    if (result.length > 0) {

                        result.forEach(video => {
                            if (MyContainer.classList.contains("MyGreat")) {
                                MyContainer.classList.remove("MyGreat");
                            }

                            let VideoSearched = document.createElement("div");
                            VideoSearched.className = "VideoLoaderSecond thisLoader";


                            if(VideoSearched.length <= 0){
                                e.target.value = ''
                            }
                            let MainVideos = document.createElement("video");
                            MainVideos.src = URL.createObjectURL(video.blob);
                            MainVideos.style.width = "100%";
                            MainVideos.style.height = "70%";
                            MainVideos.muted = true;
                            // MainVideos.style.border = "2px solid red";

                            let span = document.createElement("button");
                            span.className = "XPlayer";
                            span.innerHTML = "<i class='fas fa-play'></i>";


                            let NewVideoLoader = document.createElement("div")
                            NewVideoLoader.className = "NewVideoLoader";
                            span.style.border = "none";
                            MainVideos.addEventListener("loadeddata", () => {
                                NewVideoLoader.remove();

                                // MainVideos.addEventListener("mouseenter", function(){
                                //     this.currentTime = 0
                                //     this.play()
                                // })
                                // MainVideos.addEventListener("mouseout", function(){
                                //     this.currentTime = 0
                                //     this.pause();
                                //
                                // });
                                //
                                // MainVideos.addEventListener("ended", function(){
                                //     this.currentTime = 0;
                                // });
                            })

                            VideoSearched.appendChild(NewVideoLoader);


                            MainVideos.addEventListener("loadedmetadata", function () {
                                let duration = this.duration;

                                let minutes = Math.floor(duration / 60);
                                let seconds = Math.floor(duration % 60).toString().padStart((2, "0"));
                                let durationElement = document.createElement("div");
                                durationElement.className = "VideoDuration";

                                durationElement.innerHTML = `<span>${minutes}</span>:<nav>${seconds}</nav>`;

                                VideoSearched.appendChild(durationElement);
                            })


                            let nameElement = document.createElement("div")
                            nameElement.className = "VideoName";
                            nameElement.innerHTML = `${video.name}`;
                            MainVideos.title = video.name;
                            nameElement.addEventListener("mouseenter", function () {
                                nameElement.title = video.name;
                            });

                            MainVideos.addEventListener("click", function () {
                                let videoPlayerWrapper = document.createElement("div");
                                videoPlayerWrapper.className = "VideoPlayerWrapper";
                                videoPlayerWrapper.innerHTML = `

<div class="VideoPlayer_Container">
<div class="VideoPlayerContainer_Remover">
    <i class="fas fa-xmark Remove"></i>
</div>
    <div class="VideoDiv">
           <video autoplay controls src="${this.src}">
</video>                 
</div>
</div>
                        `

                                let OverAllContainer = document.querySelector(".Video_Container")
                                let bdy = document.querySelector("body")

                                bdy.appendChild(videoPlayerWrapper);

                                let Remove = document.querySelector(".Remove");

                                Remove.addEventListener("click", function () {
                                    if (bdy.contains(videoPlayerWrapper)) {
                                        bdy.classList.remove("overflowHidden")
                                        bdy.removeChild(videoPlayerWrapper);
                                    }
                                })


                                if (bdy.contains(videoPlayerWrapper)) {
                                    bdy.scrollTo(0, 0)
                                    bdy.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                    bdy.classList.add("overflowHidden")
                                } else {
                                    bdy.classList.remove("overflowHidden")
                                }
                            })

                            let optionsContainer =  document.createElement("div");
                            optionsContainer.className = "VideoOptionsContainer";
                            optionsContainer.innerHTML = "<i class='fas fa-list-dots rt'></i>";

                            optionsContainer.addEventListener("click", function(){
                                let existingWrapper = document.querySelector(".OptionsWrapper");
                                if(existingWrapper) {
                                    existingWrapper.remove();
                                    return
                                }

                                let optionWrapper2 = document.createElement("div")
                                optionWrapper2.className = "OptionsWrapper";
                                let newOption = document.createElement("div");
                                newOption.className = "newOptions";

                                let Array  = ["Rename","Delete"]
                                for(let x = 0; x < Array.length; x++) {
                                    let li = document.createElement("button");
                                    li.className = "ListOptionWrapper";
                                    li.innerHTML = Array[x];


                                    li.addEventListener("click", function(){
                                        optionWrapper2.remove()
                                        if(this.innerHTML == "Delete"){

                                            let VideoName = nameElement.innerHTML;
                                            let request = indexedDB.open("MyVideo", 3);

                                            request.onerror = e => {
                                                console.log("Error While loading Video", e.target.error);
                                            }
                                            request.onsuccess = e => {
                                                let db = e.target.result;

                                                let transaction = db.transaction(["videos"], "readwrite");
                                                let store = transaction.objectStore("videos");

                                                let index = store.index("name");
                                                let getRequest = index.get(VideoName);

                                                getRequest.onsuccess = () => {
                                                    let record = getRequest.result;
                                                    if (record) {
                                                        let deleteRequest = store.delete(record.id);

                                                        deleteRequest.onsuccess = () => {
                                                           alert(`Deleted video: ${record.name}`);
                                                            VideoSearched.remove();

                                                            if(MyContainer.children.length === 0){
                                                               SearchInput.value = "";
                                                                SecondPageFunction()
                                                            }
                                                        };
                                                    }
                                                };



                                            }

                                        }

                                        if(this.innerHTML == "Rename"){
                                            let request = indexedDB.open("MyVideo", 3);

                                            request.onerror = e => {
                                                console.error("Error While loading Video", e.target.error);
                                            }

                                            request.onsuccess = e => {
                                                let VideoNames = nameElement.innerHTML;
                                                let db = e.target.result;

                                                let transaction = db.transaction(["videos"], "readwrite");
                                                let store = transaction.objectStore("videos");

                                                let getAllNames = store.getAll();

                                                getAllNames.onsuccess = e => {
                                                    let AllVideosName = getAllNames.result;

                                                    let match = AllVideosName.find(y => y.name === VideoNames);

                                                    if(match) {
                                                        let newName = prompt("Enter Your New Name", match.name);

                                                        if(newName && newName.trim() !== ""){
                                                            match.name = newName.trim();

                                                            let updatedName = store.put(match);

                                                            updatedName.onsuccess = e => {
                                                                alert("Video renamed successfully!");
                                                                nameElement.innerHTML = match.name;



                                                                // ✅ Re-fetch all videos so search uses the new name
                                                                store.getAll().onsuccess = (ev) => {
                                                                    videosArr = ev.target.result;

                                                                    SearchInput.dispatchEvent(new Event("input"));
                                                                };
                                                            }

                                                            updatedName.onerror = (e) =>{
                                                                console.log("Error While Renaming your video", e.target.error);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    })
                                    newOption.append(li);
                                }
                                optionWrapper2.appendChild(newOption);
                                VideoSearched.appendChild(optionWrapper2);

                            })

                            VideoSearched.appendChild(optionsContainer);
                            VideoSearched.appendChild(nameElement);
                            VideoSearched.appendChild(span)
                            VideoSearched.appendChild(MainVideos);

                            MyContainer.appendChild(VideoSearched);

                        })


                    } else {
                        MyContainer.innerHTML = `<p style="width: 100% !important; text-align: center;font-size: 2.5em; font-weight: 600">Video not found <span style="color: gold">(${SearchInput.value}!)</span></p>`;
                        MyContainer.classList.add("MyGreat")
                        MyContainer.style.setProperty("width", "100%");
                    }

                })


            }



        }



        let Click_back = document.querySelector(".Click-back");

        let searchInputChecked = document.querySelector(".search")
        Click_back.addEventListener("click", function() {
            searchInputChecked.value = "";
            let request = indexedDB.open("MyVideo", 3)

            request.onsuccess = function (e) {

                db = e.target.result;

                if (!db.objectStoreNames.contains("videos")) {
                    console.log("Error Occurred")
                    return
                }

                let transact = db.transaction(["videos"], "readwrite")
                let store = transact.objectStore("videos");
                let getAll = store.getAll();

                getAll.onsuccess = (e) => {
                    let result = e.target.result;



                    let MyContainer = document.querySelector(".Section2_Wrapper");
                    MyContainer.innerHTML = "";
                    result.forEach(videos => {
                        if (MyContainer.classList.contains("MyGreat")) {
                            MyContainer.classList.remove("MyGreat");
                        }

                        let VideoSearched = document.createElement("div");
                        VideoSearched.className = "VideoLoaderSecond thisLoader";

                        let MainVideos2 = document.createElement("video");
                        MainVideos2.src = URL.createObjectURL(videos.blob);
                        MainVideos2.style.width = "100%";
                        MainVideos2.style.height = "70%";
                        MainVideos2.muted = true;

                        let span = document.createElement("button");
                        span.className = "XPlayer";
                        span.innerHTML = "<i class='fas fa-play'></i>";


                        let NewVideoLoader = document.createElement("div")
                        NewVideoLoader.className = "NewVideoLoader";
                        span.style.border = "none";

                        MainVideos2.addEventListener("loadeddata", () => {
                            NewVideoLoader.remove();
                        })

                        VideoSearched.appendChild(NewVideoLoader);


                        MainVideos2.addEventListener("loadedmetadata", function () {
                            let duration = this.duration;

                            let minutes = Math.floor(duration / 60);
                            let seconds = Math.floor(duration % 60).toString().padStart((2, "0"));
                            let durationElement = document.createElement("div");
                            durationElement.className = "VideoDuration";

                            durationElement.innerHTML = `<span>${minutes}</span>:<nav>${seconds}</nav>`;

                            VideoSearched.appendChild(durationElement);
                        })


                        let nameElement = document.createElement("div")
                        nameElement.className = "VideoName";
                        nameElement.innerHTML = `${videos.name}`;
                        MainVideos2.title = videos.name;
                        nameElement.addEventListener("mouseenter", function () {
                            nameElement.title = videos.name;
                        });

                        MainVideos2.addEventListener("click", function () {
                            let videoPlayerWrapper = document.createElement("div");
                            videoPlayerWrapper.className = "VideoPlayerWrapper";
                            videoPlayerWrapper.innerHTML = `

<div class="VideoPlayer_Container">
<div class="VideoPlayerContainer_Remover">
    <i class="fas fa-xmark Remove"></i>
</div>
    <div class="VideoDiv">
           <video autoplay controls src="${this.src}">
</video>                 
</div>
</div>
                        `

                            let OverAllContainer = document.querySelector(".Video_Container")
                            let bdy = document.querySelector("body")

                            bdy.appendChild(videoPlayerWrapper);

                            let Remove = document.querySelector(".Remove");

                            Remove.addEventListener("click", function () {
                                if (bdy.contains(videoPlayerWrapper)) {
                                    bdy.classList.remove("overflowHidden")
                                    bdy.removeChild(videoPlayerWrapper);
                                }
                            })


                            if (bdy.contains(videoPlayerWrapper)) {
                                bdy.scrollTo(0, 0)
                                bdy.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                                bdy.classList.add("overflowHidden")
                            } else {
                                bdy.classList.remove("overflowHidden")
                            }
                        })

                        let optionsContainer1 =  document.createElement("div");
                        optionsContainer1.className = "VideoOptionsContainer";
                        optionsContainer1.innerHTML = "<i class='fas fa-list-dots rt'></i>";

                        optionsContainer1.addEventListener("click", function(){
                            let existingWrappers = document.querySelector(".OptionsWrapper");
                            if(existingWrappers) {
                                existingWrappers.remove();
                                return
                            }

                            let optionWrapper2 = document.createElement("div")
                            optionWrapper2.className = "OptionsWrapper";
                            let newOption = document.createElement("div");
                            newOption.className = "newOptions";

                            let Array  = ["Rename","Delete"]
                            for(let x = 0; x < Array.length; x++) {
                                let li = document.createElement("button");
                                li.className = "ListOptionWrapper";
                                li.innerHTML = Array[x];


                                li.addEventListener("click", function(){
                                    optionWrapper2.remove()
                                    if(this.innerHTML == "Delete"){

                                        let VideoName = nameElement.innerHTML;
                                        let request = indexedDB.open("MyVideo", 3);

                                        request.onerror = e => {
                                            console.log("Error While loading Video", e.target.error);
                                        }
                                        request.onsuccess = e => {
                                            let db = e.target.result;

                                            let transaction = db.transaction(["videos"], "readwrite");
                                            let store = transaction.objectStore("videos");

                                            let index = store.index("name");
                                            let getRequest = index.get(VideoName);

                                            getRequest.onsuccess = () => {
                                                let record = getRequest.result;
                                                if (record) {
                                                    let deleteRequest = store.delete(record.id);

                                                    deleteRequest.onsuccess = () => {
                                                        alert(`Deleted video: ${record.name}`);
                                                        VideoSearched.remove();
                                                        let searchInput = document.querySelector(".search")
                                                        if(MyContainer.children.length === 0){
                                                            searchInput.value = "";
                                                            SecondPageFunction()
                                                        }
                                                    };
                                                }
                                            };



                                        }

                                    }

                                    if(this.innerHTML == "Rename"){
                                        let request = indexedDB.open("MyVideo", 3);

                                        request.onerror = e => {
                                            console.error("Error While loading Video", e.target.error);
                                        }

                                        request.onsuccess = e => {
                                            let VideoNames = nameElement.innerHTML;
                                            let db = e.target.result;

                                            let transaction = db.transaction(["videos"], "readwrite");
                                            let store = transaction.objectStore("videos");

                                            let getAllNames = store.getAll();

                                            getAllNames.onsuccess = e => {
                                                let AllVideosName = getAllNames.result;

                                                let match = AllVideosName.find(y => y.name === VideoNames);

                                                if(match) {
                                                    let newName = prompt("Enter Your New Name", match.name);

                                                    if(newName && newName.trim() !== ""){
                                                        match.name = newName.trim();

                                                        let updatedName = store.put(match);

                                                        updatedName.onsuccess = e => {
                                                            alert("Video renamed successfully!");
                                                            nameElement.innerHTML = match.name;



                                                            // ✅ Re-fetch all videos so search uses the new name
                                                            store.getAll().onsuccess = (ev) => {
                                                                videosArr = ev.target.result;


                                                            };
                                                        }

                                                        updatedName.onerror = (e) =>{
                                                            console.log("Error While Renaming your video", e.target.error);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                })
                                newOption.append(li);
                            }
                            optionWrapper2.appendChild(newOption);
                            VideoSearched.appendChild(optionWrapper2);

                        })

                        VideoSearched.appendChild(optionsContainer1);
                        VideoSearched.appendChild(nameElement);
                        VideoSearched.appendChild(span)
                        VideoSearched.appendChild(MainVideos2);
                        MyContainer.appendChild(VideoSearched);
                    })


                }
            }
        })





    }






































//
// function loadVideos(newFileName) {
//     let transaction = db.transaction(["videos"], "readonly");
//     let store = transaction.objectStore("videos");
//     let index = store.index("name");
//     let request = index.get(newFileName); // get only the new video
//
//     request.onsuccess = function () {
//         VideoElements.innerHTML = ""; // optional clear
//
//         if (request.result) {
//             let videoData = request.result;
//             let div = document.createElement("div");
//             div.className = "VideoLoader";
//
//             let loader = document.createElement("div");
//             loader.className = "loader";
//             div.appendChild(loader);
//
//             let video = document.createElement("video");
//             video.style.height = "100%";
//             video.style.width = "100%";
//             video.src = URL.createObjectURL(videoData.blob);
//
//             video.addEventListener("loadeddata", () => {
//                 loader.remove();
//             });
//
//             let deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "🗑";
//             deleteBtn.className = "delete_btn";
//             deleteBtn.addEventListener("click", () => {
//                 let delTx = db.transaction(["videos"], "readwrite");
//                 let delStore = delTx.objectStore("videos");
//                 delStore.delete(videoData.id);
//
//                 delTx.oncomplete = () => {
//                     alert(videoData.name + " deleted");
//                     VideoElements.innerHTML = ""; // remove from UI
//                 };
//             });
//
//             div.appendChild(video);
//             div.appendChild(deleteBtn);
//             VideoElements.appendChild(div);
//         }
//     };
// }


// function loadVideos() {
//     let transaction = db.transaction(["videos"], "readonly");
//     let store = transaction.objectStore("videos");
//     let request = store.getAll();
//
//     request.onsuccess = function () {
//         // Clear before reload
//         VideoElements.innerHTML = "";
//
//         request.result.forEach(videoData => {
//             let div = document.createElement("div");
//             div.className = "VideoLoader";
//
//             // Add loading animation
//             let loader = document.createElement("div");
//             loader.className = "loader"; // Style with CSS
//             div.appendChild(loader);
//
//             let video = document.createElement("video");
//             video.style.height = "100%";
//             video.style.width = "100%";
//             video.src = URL.createObjectURL(videoData.blob);
//
//
//             // Trigger animation stop when video is ready
//             video.addEventListener("loadeddata", () => {
//                 loader.remove();
//             });
//
//
//             let deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "🗑";
//             deleteBtn.className = "delete_btn";
//             deleteBtn.addEventListener("click", () => {
//                 let delTx = db.transaction(["videos"], "readwrite");
//                 let delStore = delTx.objectStore("videos");
//                 delStore.delete(videoData.id);
//
//                 delTx.oncomplete = () => {
//                     alert(videoData.name + " deleted");
//                     loadVideos();
//                 };
//             });
//
//             div.appendChild(video);
//             div.appendChild(deleteBtn);
//             VideoElements.appendChild(div);
//         });
//     };
// }

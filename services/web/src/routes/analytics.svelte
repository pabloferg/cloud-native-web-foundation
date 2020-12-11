<script>

    let current = 'home';



</script>


<svelte:head>
	<title>Analytics</title>
</svelte:head>

<div>
    <div class="bg-white">
        <header class="border-b border-gray-200 space-y-2">
            <nav class="max-w-5xl mx-auto px-6 flex items-center justify-between pt-4">
                <div class="flex items-center space-x-6">
                    <a href=" ">
                        <img class="h-6" alt='diamond logo' src='diamond.svg'>
                    </a>

                <span class="inline-flex items-center space-x-2  text-sm leading-5 font-medium">
                    <span>
                        <img
                            class="h-8 w-8 rounded-full border border-gray-200" 
                            src="https://avatars3.githubusercontent.com/u/51671788?s=400&u=90e5fbc7579aef41298353e0c5aabd6aa394f2b9&v=4"
                            alt="avatar">
                    </span>
                    <span> Pablo Fernandez</span>
                </span>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-5">
                        <button type="button"
                                class="border border-gray-200 rounded-md px-3 py-1.5 text-sm leading-5 text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                            Feedback
                        </button>
                        <a class="px-3 py-1.5 text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150"
                            href="https://www.google.com">
                            Blog
                        </a>
                        <a class="px-3 py-1.5 text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150"
                            href="https://www.google.com">
                            Support
                        </a>
                        <a class="px-3 py-1.5 text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-150"
                            href="https://www.google.com">
                            Docs
                        </a>
                        <button type="button">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                class="h-5 w-5 text-gray-400" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
                            <path id="XMLID_30_" d="M21,53c-1.8,0-3.7-0.8-5-2.1c-1.3-1.3-2-3.1-2-4.9c0-1.8,0.8-3.6,2-5c1.3-1.3,3.1-2,5-2c1.8,0,3.6,0.8,4.9,2
                                c1.3,1.3,2.1,3.1,2.1,5c0,1.8-0.8,3.6-2.1,4.9C24.6,52.2,22.8,53,21,53z M50.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5
                                c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1
                                C47.8,53,49.6,52.2,50.9,50.9z M75.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2
                                c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1C72.8,53,74.6,52.2,75.9,50.9z"/>
                            </svg>
                        </button> 
                    </div>
                    
                </div>
            </nav>
            <div class="max-w-5xl mx-auto px-6">
                <nav class="-mb-px flex space-x-5 text-sm leading-5">


                    <a class="{current === 'home' ? "border-b-2 border-black px-0.5 py-3 text-black" : "border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150"}"
                        on:click="{() => current = 'home'}"
                        href="analytics"
                    >Home
                    </a>

                    <a class="{current === 'projects' ? "border-b-2 border-black px-0.5 py-3 text-black" : "border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150"}"
                        on:click="{() => current = 'projects'}"
                        href="analytics"
                    >Projects
                    </a>

                    <a class="{current === 'contact' ? "border-b-2 border-black px-0.5 py-3 text-black" : "border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150"}"
                        on:click="{() => current = 'contact'}"
                        href="analytics"
                    >Contact
                    </a>

                </nav>
            </div>

        </header>
        <div class="max-w-5xl mx-auto px-6 pt-8 pb-32">
            <div class="flex space-x-8">
                <div>
                     <img
                            class="h-24 w-24 rounded-full" 
                            src="https://avatars3.githubusercontent.com/u/51671788?s=400&u=90e5fbc7579aef41298353e0c5aabd6aa394f2b9&v=4"
                            alt="avatar">
                </div>
                <div class="flex flex-col justify-end space-y-4 mb-0">
                    <div class="flex items-center space-x-3 pb-0">
                        <h1 class="text-4xl leading-10 font-bold">Pablo Fernandez</h1>
                        <span class="mt-1 inline-flex rounded-full bg-gray-50 border border-gray-200 px-2 text-xs leading-3 font-medium text-black uppercase tracking-wide">
                            Data Scientist
                        </span>
                    </div>
                    <div>
                        <dl>
                            <dt class="text-xs leading-5 font-medium text-gray-500 uppercase tracking-wide">Company</dt>
                            
                            <dd class="flex items-center space-x-2 text-sm leading-5 font-medium">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 48 48" version="1.1">
                                    <g id="surface1">
                                        <path d="M48 24.398s.102.5-.2 1.204c-.902 1.597-5.402 3.5-7.698 4.398-3.5-.7-6.704-1.898-9-2.5 4-.8 8.097-2.102 9.398-2.602 1-.398 3.398-1.597 4.3-2.398L46 21z" fill="#0D47A1"/>
                                        <path d="M0 19.5c6.7-.3 29.602-1.5 32.3-1.5 2.802 0 7.802-.102 9 .3 1.2.302 2.7.5 3.9 1.5 1.198 1 2.5 3.2 2.902 4.598-.704-1-1.801-1.898-2.801-2.097-2.903-.2-12-.301-12-.301s-15.2.102-20.301-.3c-5.3-.5-9.898-1.2-13-2.2" fill="#FF3D00"/>
                                    </g>
                                </svg>
                                <span>British Airways</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

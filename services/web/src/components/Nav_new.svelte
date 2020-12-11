 <script>
    import AuthNavItem from "./auth-nav-item.svelte";
    let current = 'home';

</script>
 
<div class="bg-white">
    <header class="sticky border-b border-gray-200 space-y-2">
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
                <nav class="-mb-px flex justify-between items-center text-sm leading-5">

                    <div class="space-x-5 ">
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
                        href="about"
                        >Contact
                        </a>

                        <a rel=prefetch class="{current === 'blog' ? "border-b-2 border-black px-0.5 py-3 text-black" : "border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-150"}"
                        on:click="{() => current = 'blog'}"
                        href="blog"
                        >Blog
                        </a>

                    </div>
                    <div class='px-0.5 py-3 text-black'>
                        <AuthNavItem/>
                    </div>



                </nav>
            </div>

     </header>

</div>

 
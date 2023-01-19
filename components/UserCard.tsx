import React from 'react'

type Props = {}

const UserCard = (props: Props) => {
    const data = {
        id: "1",
        name: "FirstName LastName",
        email: "lastnamefirstname@gmail.com",
        about: "Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.",
        image:
          "https://www.cnet.com/a/img/resize/4bbb5d8eeffea0beb519f4f5a21192068d133c34/hub/2021/09/10/56cb167f-7bff-4076-9b00-d415067f5477/screenshot-2021-09-10-at-5-44-32-pm.png?auto=webp&fit=crop&height=900&width=1200",
        followers: "100",
        following: "100",
        blogs: "100",
        likes: "100",
        comments: "100",
        posts: "100",
      };
      
  return (
    <div className='grid place-items-center h-[400px] '>
        <div className='rounded-3xl p-2 w-[680px] h-[250px]  '>
            <div className='flex  justify-between items-center'>
                <img src={data.image} className='rounded-full h-32 w-32' />
                <div>
                    <div className='grid'>
                        <span className='font-thin text-lg'>Post</span>
                        <span className='font-semibold text-lg'>{data.posts}</span>
                    </div>
                </div>
                <div>
                    <div className='grid'>
                        <span className='font-thin text-lg'>Followers</span>
                        <span className='font-semibold text-lg'>{data.following}</span>
                    </div>
                </div>
                <div>
                    <div className='grid'>
                        <span className='font-thin text-lg'>Following</span>
                        <span className='font-semibold text-lg'>23</span>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <div className='grid'>
                    <span className='font-semibold text-lg'>{data.name}</span>
                    <span className='font-thin text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</span>
                </div>
            </div>
            <div className='pt-5'>
                <div className='grid'>
                    <span className='font-semibold '>About</span>
                    <span className='font-thin '>{data.about}</span>
                </div>
            </div>
        </div>
        <div className='pt-16 flex  flex-row space-x-10    justify-items-between'>
        <button className="bg-green-300 w-32 hover:bg-green-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md  ">
Edit Profile
</button>           
<button className="bg-green-300 w-32 hover:bg-green-900 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md  ">
Follow 
</button>          
        </div>
    </div>
  )
}

export default UserCard
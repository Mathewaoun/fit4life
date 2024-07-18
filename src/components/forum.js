import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './forum.css';

function Forum() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [forums, setForums] = useState([
    {
      id: 1,
      title: 'Fitness Tips',
      posts: [
        { id: 1, user: 'Alice', message: 'What are the best exercises for abs?', timestamp: '2024-06-01T12:00:00', response: { user: 'Expert', message: 'The best exercises for abs are planks, crunches, and leg raises.', timestamp: '2024-06-01T12:00:00' } },
        { id: 2, user: 'Bob', message: 'How often should I work out?', timestamp: '2024-06-08T14:30:00', response: { user: 'Expert', message: 'You should work out at least 3-4 times a week for optimal results.', timestamp: '2024-06-08T14:30:00' } },
      ],
    },
    {
      id: 2,
      title: 'Nutrition Advice',
      posts: [
        { id: 1, user: 'Charlie', message: 'What are the best foods for muscle gain?', timestamp: '2024-06-15T09:00:00', response: { user: 'Expert', message: 'The best foods for muscle gain are lean proteins, whole grains, and healthy fats.', timestamp: '2024-06-15T09:00:00' } },
        { id: 2, user: 'Dave', message: 'How many calories should I eat per day?', timestamp: '2024-06-22T10:45:00', response: { user: 'Expert', message: 'The number of calories you should eat per day depends on your goals, but generally, you should consume between 2000-2500 calories for maintenance.', timestamp: '2024-06-22T10:45:00' } },
      ],
    },
    {
      id: 3,
      title: 'Mental Health',
      posts: [
        { id: 1, user: 'Emily', message: 'What are some good stress-relief techniques?', timestamp: '2024-06-29T08:00:00', response: { user: 'Expert', message: 'Some good stress-relief techniques include meditation, deep breathing exercises, and regular physical activity.', timestamp: '2024-06-29T08:00:00' } },
        { id: 2, user: 'Frank', message: 'How can I improve my sleep quality?', timestamp: '2024-07-06T11:00:00', response: { user: 'Expert', message: 'To improve sleep quality, maintain a regular sleep schedule, create a restful environment, and limit screen time before bed.', timestamp: '2024-07-06T11:00:00' } },
      ],
    },
    {
      id: 4,
      title: 'Workout Routines',
      posts: [
        { id: 1, user: 'Grace', message: 'What is the best routine for beginners?', timestamp: '2024-07-13T12:00:00', response: { user: 'Expert', message: 'The best routine for beginners includes a mix of cardio, strength training, and flexibility exercises. Start with light weights and gradually increase.', timestamp: '2024-07-13T12:00:00' } },
        { id: 2, user: 'Henry', message: 'How can I build a balanced workout routine?', timestamp: '2024-07-20T14:30:00', response: { user: 'Expert', message: 'To build a balanced workout routine, include cardio, strength training, flexibility, and rest days. Aim for a variety of exercises to target all major muscle groups.', timestamp: '2024-07-20T14:30:00' } },
      ],
    },
    {
      id: 5,
      title: 'Supplements',
      posts: [
        { id: 1, user: 'Ivy', message: 'Which supplements are essential for muscle gain?', timestamp: '2024-07-27T09:00:00', response: { user: 'Expert', message: 'Essential supplements for muscle gain include protein powder, creatine, and branched-chain amino acids (BCAAs).', timestamp: '2024-07-27T09:00:00' } },
        { id: 2, user: 'Jack', message: 'Are there any supplements to avoid?', timestamp: '2024-08-03T10:45:00', response: { user: 'Expert', message: 'Supplements to avoid include those with unproven benefits or harmful ingredients. Always check for quality and safety certifications.', timestamp: '2024-08-03T10:45:00' } },
      ],
    },
    {
      id: 6,
      title: 'Injury Prevention',
      posts: [
        { id: 1, user: 'Kate', message: 'How can I prevent injuries during workouts?', timestamp: '2024-08-10T08:00:00', response: { user: 'Expert', message: 'Prevent injuries by warming up properly, using correct form, and not overloading weights. Listen to your body and rest when needed.', timestamp: '2024-08-10T08:00:00' } },
        { id: 2, user: 'Leo', message: 'What are the most common workout injuries?', timestamp: '2024-08-17T11:00:00', response: { user: 'Expert', message: 'The most common workout injuries include sprains, strains, and tendinitis. Proper technique and gradual progression can help prevent these.', timestamp: '2024-08-17T11:00:00' } },
      ],
    },
  ]);

  const [newForumTitle, setNewForumTitle] = useState('');
  const [newPostMessage, setNewPostMessage] = useState('');
  const [newPostUser, setNewPostUser] = useState('');
  const [selectedForum, setSelectedForum] = useState(null);

  const handleAddForum = () => {
    const newForum = {
      id: forums.length + 1,
      title: newForumTitle,
      posts: [],
    };
    setForums([...forums, newForum]);
    setNewForumTitle('');
  };

  const handleAddPost = () => {
    if (newPostUser.trim() === '' || newPostMessage.trim() === '') {
      alert('Both fields are required!');
      return;
    }

    const newPost = {
      id: selectedForum.posts.length + 1,
      user: newPostUser,
      message: newPostMessage,
      timestamp: new Date().toISOString(),
      response: null,
    };
    const updatedForums = forums.map((forum) => {
      if (forum.id === selectedForum.id) {
        return { ...forum, posts: [...forum.posts, newPost] };
      }
      return forum;
    });
    setForums(updatedForums);
    setNewPostMessage('');
    setNewPostUser('');
  };

  return (
    <section className="forum">
      <h2>Discussion Forums</h2>
      <div className="forum-creation">
        <input
          type="text"
          placeholder="New Forum Title"
          value={newForumTitle}
          onChange={(e) => setNewForumTitle(e.target.value)}
        />
        <button onClick={handleAddForum}>Create Forum</button>
      </div>
      <div className="forum-list">
        {forums.map((forum) => (
          <div key={forum.id} className="forum-item" onClick={() => setSelectedForum(forum)}>
            <h3>{forum.title}</h3>
            {selectedForum && selectedForum.id === forum.id && (
              <div className="forum-posts">
                {forum.posts.map((post) => (
                  <div key={post.id} className="post">
                    <strong>{post.user}:</strong> {post.message}
                    <div className="timestamp">{formatDate(post.timestamp)}</div>
                    {post.response ? (
                      <div className="response">
                        <strong>{post.response.user} <FaCheckCircle className="verified-icon" />:</strong> {post.response.message}
                        <div className="timestamp">{formatDate(post.response.timestamp)}</div>
                      </div>
                    ) : (
                      <div className="pending-response">You will get a response from an expert soon.</div>
                    )}
                  </div>
                ))}
                <div className="new-post">
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={newPostUser}
                      onChange={(e) => setNewPostUser(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="New Post Message"
                      value={newPostMessage}
                      onChange={(e) => setNewPostMessage(e.target.value)}
                    />
                  </div>
                  <button onClick={handleAddPost} disabled={!newPostUser.trim() || !newPostMessage.trim()}>Post</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forum;

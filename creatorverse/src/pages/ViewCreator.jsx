import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewCreator() {
  const [creator, setCreator] = useState({});
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {

        const { data, error } = await supabase
          .from("creatorverse")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching creator:", error);
        } else {
          setCreator(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching creator:", error);
      }
    };

    fetchCreator();
  }, [id]); 

  const deleteCreator = async (event) => {
    event.preventDefault();
    try {
      await supabase.from("creatorverse").delete().eq("id", id);
      navigate("/");
      alert("Creator Deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    window.open(creator.url, "_blank"); 
  };

  return (
    <>
      {loading ? (
        <progress></progress>
      ) : (
        <>
          <div className="full-creator-container">
            <h2>{creator.name}</h2>
            <h3>{creator.description}</h3>

            <img
              src={creator.imageURL}
              alt={creator.name + ".png"}
            />
          </div>
          
          <h3>
          <div className="menu-container">
          <button onClick={handleButtonClick}>Page Link</button> 
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              View Creators
            </button>
            <Link to={`/edit-creator/${id}`}>
              <button>Edit Creator</button>
            </Link>
            <button onClick={deleteCreator}>
              Delete Creator
            </button>
          </div>
          </h3>
        </>
      )}
    </>
  );
}

export default ViewCreator;

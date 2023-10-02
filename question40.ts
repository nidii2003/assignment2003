function mke_album(artist:string, title:string, tracks:number){ 
    const album = {
      artist: artist,
      title: title,
      tracks:tracks
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  const album1=mke_album("Artist 1", "Album Title 1",4);
  const album2=mke_album("Artist 2", "Album Title 2", 10);
  const album3=mke_album("Artist 3", "Album Title 3", 15);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
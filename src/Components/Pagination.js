import React from 'react';


function Pagination() {
  return (
      <div class="">
          <nav aria-label="...">
  <ul class="pagination justify-content-center">
    <li class=" page-item disabled">
      <a class="page-link" style={{ color: "#BB1928",backgroundColor:" #F7EDED" }} href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link sort" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link sort" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link sort" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link sort" href="#">Next</a>
    </li>
  </ul>
</nav>
      </div>
  );
}

export default Pagination;

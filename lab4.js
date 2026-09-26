const productList = document.getElementById("products");

function escapeHtml(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return String(value ?? "").replace(/[&<>"']/g, (character) => entities[character]);
}

axios
  .get("http://localhost:3000/products")
  .then(({ data }) => {
    if (!productList) {
      throw new Error('Không tìm thấy phần tử có id="products".');
    }

    if (!Array.isArray(data)) {
      throw new Error("Dữ liệu sản phẩm từ API không hợp lệ.");
    }

    if (data.length === 0) {
      productList.innerHTML = `
        <tr>
          <td colspan="5" class="px-4 py-2">Chưa có sản phẩm.</td>
        </tr>
      `;
      return;
    }

    productList.innerHTML = data
      .map(
        (product, index) => `
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
            <td class="px-4 py-2 border border-gray-300">${escapeHtml(product.id)}</td>
            <td class="px-4 py-2 border border-gray-300">${escapeHtml(product.name)}</td>
            <td class="px-4 py-2 border border-gray-300">${escapeHtml(
              Number.isFinite(Number(product.price))
                ? `${new Intl.NumberFormat("vi-VN").format(Number(product.price))} ₫`
                : product.price,
            )}</td>
            <td class="px-4 py-2 border border-gray-300">${escapeHtml(product.category)}</td>
          </tr>
        `,
      )
      .join("");
  })
  .catch((error) => {
    console.error("Không thể tải danh sách sản phẩm:", error);

    if (productList) {
      productList.innerHTML = `
        <tr>
          <td colspan="5" class="px-4 py-2 text-red-600">
            Không tải được danh sách sản phẩm. Hãy kiểm tra json-server.
          </td>
        </tr>
      `;
    }
  });
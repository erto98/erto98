import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter } from "react-router-dom";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <BrowserRouter>
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Cemil Garip Photography</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Ana Sayfa
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Basketbol</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Futbol Süper Lig
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/yenicami">Yenicami AK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Mağusa Türk Gücü</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Lefke TSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Gönyeli SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Doğan Türk Birliği</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Mesarya SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Cihangir GSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Kücük Kaymaklı TSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Göçmenköy İYKS</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Türk Ocağı Limasol</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Hamitköy ŞHSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Baf Ülkü Yurdu</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/binatli">Binatlı YSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Girne Halk Evi</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>
                      Merit Alsancak Yeşilova SK
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Yonpaş Dumlupınar TSK</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Futbol 1. Lig
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Çetinkaya TSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>China Bazaar Gençlik Gücü</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Miracle Değirmenlik SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>L. Gençler Birliği SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Karşıyaka ASK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>SFC Dörtyol SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Esentepe KKSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Yeniboğaziçi DSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Düzkaya KOSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Mormenekşe GBSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Maraş GSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>İncirli SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Yalova SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Bostancı Bağcıl SK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Çanakkale TSK</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Görneç KSK</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                İletişim
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </BrowserRouter>
  );
}

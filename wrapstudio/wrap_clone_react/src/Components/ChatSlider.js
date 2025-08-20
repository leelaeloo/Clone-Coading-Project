import React from "react";
import useSwiper from "../Hook/useSwiper";

function ChatSlider() {
  const swiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,
  };

  const swiperRef = useSwiper(swiperOptions);

  return (
    // 슬라이드 섹션
    <section className="chat-slider-section">
      <div ref={swiperRef} className="swiper chatSwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/* 카드 */}
            <div className="chat-card">
              {/* Client 말풍선 */}
              <div className="chat-bubble client">
                <div className="card">
                  <div>
                    <strong>F브랜드</strong>
                    <br />
                    <small>20분 전</small>
                  </div>
                </div>
                <p>
                  정기적인 협업이 필요하지만, 예산이 한정적이라 요청할 때만
                  맡기고 싶어요.
                </p>
              </div>
              {/* Wrapstudio 말풍선 */}
              <div className="chat-bubble wrapstudio">
                <p>
                  건바이건으로 유연하게 협업 가능하며, 필요할 때마다 빠르게
                  대응해 드립니다!
                </p>
                <small>랩스튜디오 · 10분 전</small>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="chat-card">
              {/* Client 말풍선 */}
              <div className="chat-bubble client">
                <div className="card">
                  <div>
                    <strong>A에이전시</strong>
                    <br />
                    <small>20분 전</small>
                  </div>
                </div>
                <p>
                  프로젝트 일정이 촉박한데 퍼블리싱 인력이 부족해서 고민이에요.
                </p>
              </div>
              {/* Wrapstudio 말풍선 */}
              <div className="chat-bubble wrapstudio">
                <p>일정에 맞춰 완성도 높은 퍼블리싱을 지원해 드릴게요!</p>
                <small>랩스튜디오 · 10분 전</small>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="chat-card">
              {/* Client 말풍선 */}
              <div className="chat-bubble client">
                <div className="card">
                  <div>
                    <strong>B스타트업</strong>
                    <br />
                    <small>20분 전</small>
                  </div>
                </div>
                <p>
                  단기 외주를 맡기고 싶은데, 작업물 퀄리티와 향후 유지보수가
                  걱정돼요.
                </p>
              </div>
              {/* Wrapstudio 말풍선 */}
              <div className="chat-bubble wrapstudio">
                <p>
                  퀄리티 높은 결과물은 물론, 프로젝트 종료 후에도 하자보증 및
                  유지관리를 제공해드려요!
                </p>
                <small>랩스튜디오 · 10분 전</small>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            {/* Client 말풍선 */}
            <div className="chat-card">
              <div className="chat-bubble client">
                <div className="card">
                  <div>
                    <strong>C마케팅팀</strong>
                    <br />
                    <small>20분 전</small>
                  </div>
                </div>
                <p>
                  이벤트 페이지를 자주 운영해야 하는데, 이벤트 특성상 매번
                  일정이 촉박해요.
                </p>
              </div>
              <div className="chat-bubble wrapstudio">
                <p>
                  반복될 만한 업무는 미리 구조를 만들어 빠르게 대응 가능하게
                  해드립니다!
                </p>
                <small>랩스튜디오 · 10분 전</small>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="chat-card">
              <div className="chat-bubble client">
                <div className="card">
                  <div>
                    <strong>D솔루션</strong>
                    <br />
                    <small>20분 전</small>
                  </div>
                </div>
                <p>
                  저희 서비스를 웹 페이지에 통합하고 싶은데, 기술 지원이
                  가능한가요?
                </p>
              </div>
              {/* Wrapstudio 말풍선 */}
              <div className="chat-bubble wrapstudio">
                <p>
                  네, 프로젝트에 맞춰 필요한 기술 스택을 활용해 원활한 통합을
                  지원해 드립니다!
                </p>
                <small>랩스튜디오 · 10분 전</small>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default ChatSlider;
